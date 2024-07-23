import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/newComponents/Footer/Footer";
import Header from "../../components/newComponents/Header/Header";
import { useDispatch } from "react-redux";
import { emptyDetail } from "../../redux/actions";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Project.css";
import { projects } from "../../utils/projects";
import CircularProgress from "../../components/newComponents/CircularProgress/CircularProgress";
import GoogleMapEmbed from "../../components/GoogleMapEmbed/GoogleMapEmbed";
import Amenities from "../../components/newComponents/Amenities/Amenities";
import { IoIosContacts } from "react-icons/io";
import FlyerProject from "../../components/newComponents/Flyers/FlyerProject";
const Project = ({ match }) => {
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
    const filteredProject = projects.find((p) => p.slug === projectSlug);
    setDetail(filteredProject);
  }, [projectSlug]);

  useEffect(() => {
    return () => {
      dispatch(emptyDetail());
    };
  }, [dispatch]);

  const images = detail ? detail.presentImages : "";

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !isFullscreen ? true : false,
    nextArrow: isFullscreen ? <SampleNextArrow /> : null,
    prevArrow: isFullscreen ? <SamplePrevArrow /> : null,
  };

  return (
    <>
      {detail ? (
        <div>
          <FlyerProject banner={detail.img} />
          <Header />
          <div className="flex flex-wrap justify-between items-start py-20 px-0 lg:px-10 xl:px-32 space-y-8 lg:space-y-0">
            <div className="w-full lg:w-[43%] flex flex-col justify-between items-start px-2 gap-y-4">
              <h1 className="text-left text-3xl lg:text-4xl l poppins-regular text-gray-800 font-bold">
                {detail.name}
              </h1>
              <p className="text-sm lg:text-md poppins-light"> {detail.description}</p>
              <a
                href="/"
                className="bg-[#ccad24] hover:bg-[#a18c2d] text-gray-50 flex justify-center items-center px-4 py-2 rounded-full text-lg gap-x-2 "
              >
                Consultá <IoIosContacts className="text-2xl" />
              </a>
            </div>
            <div
              className={`${
                isFullscreen ? "w-screen" : "w-full lg:w-2/4"
              } project-slider z-20 flex flex-wrap lg:flex-nowrap justify-between items-start gap-3`}
            >
              {images ? (
                <div
                  ref={sliderRef}
                  className={`w-full lg:w-[80%] h-auto flex justify-center items-center ${
                    isFullscreen
                      ? "fixed lg:w-full inset-0 z-50 bg-gray-900 bg-opacity-75"
                      : ""
                  }`}
                >
                  <div
                    className={`w-full h-[320px] rounded-xl overflow-hidden ${
                      isFullscreen ? "w-[80%] h-full" : ""
                    }`}
                  >
                    <Slider
                      {...settings}
                      className={`${isFullscreen ? "h-full" : ""}`}
                    >
                      {images?.map((image, index) => (
                        <div
                          key={index}
                          className={`h-full relative ${
                            isFullscreen
                              ? "flex justify-center items-center"
                              : ""
                          } group`}
                        >
                          <img
                            src={image}
                            alt={`Slide ${index}`}
                            className={`w-full ${
                              isFullscreen
                                ? "max-h-full"
                                : "object-cover h-[320px]"
                            }`}
                          />
                          {isFullscreen && (
                            <div className="absolute top-8 right-8 hidden lg:block group-hover:block">
                              <button
                                onClick={toggleFullScreen}
                                className="w-auto h-auto bg-gray-500 bg-opacity-30 hover:bg-opacity-75 opacity-0 group-hover:opacity-100 duration-150 rounded-lg"
                              >
                                <MdFullscreenExit className="text-white w-full text-[60px]" />
                              </button>
                            </div>
                          )}
                          {!isFullscreen && (
                            <div className="absolute top-8 right-8 hidden lg:block group-hover:block">
                              <button
                                onClick={toggleFullScreen}
                                className="w-auto h-auto bg-gray-500 bg-opacity-30 hover:bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 duration-150"
                              >
                                <MdFullscreen className="text-white w-full text-4xl" />
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="w-full lg:w-[20%] px-2 lg:px-0 text-xl lg:text-2xl">
                {detail.year ? (
                  <p>
                    <span className="text-bold">Año:</span> {detail?.year}
                  </p>
                ) : (
                  ""
                )}
                {detail.surface ? (
                  <p>
                    <span className="text-bold">Superficie:</span>{" "}
                    {detail?.surface}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-start bg-black text-white py-12">
            <div className="container flex justify-center items-start gap-x-12">
              <div>
                <h2 className="text-2xl lg:text-4xl poppins-light">
                  Sobre <span className="poppins-semibold">{detail.name}</span>
                </h2>
                <hr className="border-[#fbcc00] border-[1px] my-6 w-1/4" />
                <p className="text-lg poppins-light">
                  Edificio de Departamentos
                </p>
              </div>
              <div>
                <div className="flex space-x-6 items-center">
                  <div className="flex flex-col items-center  ">
                    <p className="text-2xl poppins-light">2008</p>
                    <p className="text-sm text-[#fbcc00] poppins-semibold">
                      Inicio
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-2xl poppins-light">2010</p>
                    <p className="text-sm text-[#fbcc00] poppins-semibold">
                      Posesión
                    </p>
                  </div>
                  <CircularProgress percentage={100} label="Obra" />
                  <CircularProgress percentage={100} label="Venta" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Amenities amenities={detail ? detail.amenities : ""} />
          </div>
          <div>
            <GoogleMapEmbed
              address={detail.address}
              latitud={detail?.latitude}
              longitud={detail?.lingitude}
            />
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