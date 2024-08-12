import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/newComponents/Footer/Footer";
import Header from "../../components/newComponents/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { emptyDetail, getProjects } from "../../redux/actions";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Project.css";
import CircularProgress from "../../components/newComponents/CircularProgress/CircularProgress";
import GoogleMapEmbed from "../../components/GoogleMapEmbed/GoogleMapEmbed";
import Amenities from "../../components/newComponents/Amenities/Amenities";
import BlueprintsCarousel from "../../components/newComponents/Blueprints/Blueprints";
import SectionCard from "../../components/SectionCard/SectionCard";
import ContactForm from "../../components/newComponents/ContactForm/ContactForm";
import Banner from "../../components/newComponents/Flyers/Banner/ProjectBanner";

const Project = ({ match }) => {
  const projectsR = useSelector((state) => state.projects);
  const projectSlug = match.params.slug;
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [detail, setDetail] = useState(null);

  const toggleFullScreen = () => {
    if (!isFullscreen) {
      if (sliderRef.current.requestFullscreen) {
        sliderRef.current.requestFullscreen();
      } else if (sliderRef.current.mozRequestFullScreen) {
        sliderRef.current.mozRequestFullScreen();
      } else if (sliderRef.current.webkitRequestFullscreen) {
        sliderRef.current.webkitRequestFullscreen();
      } else if (sliderRef.current.msRequestFullscreen) {
        sliderRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("msfullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useEffect(() => {
    const filteredProject = projectsR.find((p) => p.slug === projectSlug);
    setDetail(filteredProject);
  }, [projectSlug, projectsR]);

  useEffect(() => {
    return () => {
      dispatch(emptyDetail());
    };
  }, [dispatch]);

  const images = detail ? detail.present_images : [];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !isFullscreen,
    nextArrow: isFullscreen ? <SampleNextArrow /> : null,
    prevArrow: isFullscreen ? <SamplePrevArrow /> : null,
  };

  const unitsSoldPercentage = detail
  ? ((parseInt(detail.unitsVailable) / parseInt(detail.totalUnits)) * 100)
  : 0;

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      {detail ? (
        <div className="mt-[80px] lg:mt-0">
          {detail.presentImages && detail.presentImages.length > 0 && (
            <Banner banners={detail.presentImages} />
          )}
          <Header />
          <div className="bg-[#a58700] py-4 border-b-[1px] border-b-[#ffc702]">
      <p
        onClick={toggleForm}
        className="text-gray-100 text-center text-lg poppins-regular cursor-pointer"
      >
        Solicitar Info
      </p>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isFormOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ContactForm />
      </div>
    </div>
          <div className="">
            <Amenities amenities={detail.amenities} />
          </div>

          <div className="w-full flex  justify-center items-start bg-black text-white py-12">
            <div className="container flex flex-wrap lg:flex-nowrap justify-center items-start gap-x-12">
              <div className="flex justify-center flex-wrap lg:block w-full lg:w-auto">
                <h2 className="text-2xl lg:text-4xl poppins-light w-full lg:w-auto">
                  Sobre <span className="poppins-semibold">{detail.name}</span>
                </h2>
                <hr className="border-[#fbcc00] border-[1px] my-6 w-1/4" />
                <p className="text-lg poppins-light">
                  Edificio de Departamentos
                </p>
              </div>
              <div>
                <div className="flex flex-wrap justify-center lg:justify-normal space-x-6 items-center">
                  <div className="flex flex-col items-center  ">
                    <p className="text-2xl poppins-light">{detail.initDate}</p>
                    <p className="text-sm text-[#fbcc00] poppins-semibold">
                      Inicio
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-2xl poppins-light">{detail.finishedDate}</p>
                    <p className="text-sm text-[#fbcc00] poppins-semibold">
                      Posesión
                    </p>
                  </div>
                  <CircularProgress percentage={100} label="Obra" />
                  <CircularProgress percentage={unitsSoldPercentage} label="Venta" />
                </div>
              </div> 
            </div>
          </div>

          {detail.sections &&
            detail.sections.map((section, index) => (
              <SectionCard key={index} section={section} index={index} />
            ))}

          <div>
            <GoogleMapEmbed
              address={detail.address}
              latitude={detail.latitude ? detail.latitude : ""}
              longitude={detail.longitude ? detail.longitude : ""}
            />
          </div>
          <div className="pb-10">
            <BlueprintsCarousel blueprints={detail ? detail.blueprints : ""} />
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Project;
