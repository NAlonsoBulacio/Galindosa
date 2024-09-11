import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/newComponents/Footer/Footer";
import Header from "../../components/newComponents/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { emptyDetail, getProjects } from "../../redux/actions";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
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
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
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

  const unitsSoldPercentage = detail
    ? (parseInt(detail.unitsVailable) / parseInt(detail.totalUnits)) * 100
    : 0;

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  console.log(detail);

  return (
    <>
      {detail ? (
        <div className="mt-[80px] lg:mt-0">
          {detail.presentImages && detail.presentImages.length > 0 && (
            <Banner banners={detail.presentImages} name={detail.name} />
          )}
          <Header />
          <div className="block lg:hidden bg-[#a58700] py-4 border-b-[1px] border-b-[#ffc702]">
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

          <div className="w-full flex  justify-center items-start bg-black text-white py-12 px-2 lg:px-0">
            <div className="container flex flex-wrap lg:flex-nowrap justify-center items-start gap-x-12 lg:gap-8">
              <div className="flex justify-center lg:justify-center flex-wrap lg:block w-full lg:w-auto">
                <h2 className="text-3xl lg:text-4xl poppins-light w-full lg:w-auto text-center text-balance">
                  Sobre <span className="poppins-semibold">{detail.name}</span>
                </h2>
                <p className="block lg:hidden text-lg poppins-light w-full lg:w-auto text-center text-balance">
                  Edificio de Departamentos
                </p>
                <hr className="border-[#fbcc00] border-[1px] my-6 w-1/4" />
                <p className="hidden lg:block text-lg poppins-light w-full lg:w-auto text-left text-balance">
                  Edificio de Departamentos
                </p>
              </div>
              <div>
                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal space-x-4 items-center">
                  {/* <div className="flex flex-col items-center justify-center ">
                    <p className="text-xl poppins-light text-center">
                      {detail.initDate}
                    </p>
                    <p className="text-sm text-[#fbcc00] poppins-semibold">
                      Inicio
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center ">
                    <p className="text-xl poppins-light text-center">
                      {detail.finishedDate}
                    </p>
                    <p className="text-sm text-[#fbcc00] poppins-semibold">
                      Posesión
                    </p>
                  </div> */}
                  {/* <div className="w-full flex justify-center gap-x-14 lg:gap-x-2">
                    <CircularProgress percentage={100} label="Obra" />
                    <CircularProgress
                      percentage={unitsSoldPercentage}
                      label="Venta"
                    />
                  </div> */}
                  <div className="flex flex-wrap">
                    <h1 className="poppins-regular text-3xl text-gray-100 text-center lg:text-left">
                      Ultimas{" "}
                      <span className="poppins-bold text-[#ffc702]">
                        unidades
                      </span>{" "}
                      de:
                    </h1>
                    {detail.rooms?.map((room) => (
                      <div className="text-white w-full flex flex-wrap justify-center items-center">
                        <p className={`w-full h-full text-2xl poppins-regular ${!room.available ? 'line-through' : ''}`}>
                         - {room.label}
                        </p>
                      </div>
                    ))}
                  </div>
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
