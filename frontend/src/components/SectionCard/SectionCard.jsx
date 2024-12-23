import React, { useState, useEffect, useRef } from "react";
import { IoIosContacts } from "react-icons/io";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import compressImage from "../../utils/compressImage";

const SectionCard = ({ section, index }) => {
  const [sectionProps, setSectionProps] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setSectionProps(section);
  }, [section]);

  const toggleFullScreen = () => {
    try {
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
    } catch (error) {
      console.error("Error al cambiar a pantalla completa:", error);
    }
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

  const images = section ? section.images : "";

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !isFullscreen,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      {sectionProps ? (
        <div
          className={`flex flex-wrap justify-between items-start py-6 lg:py-20 px-0 lg:px-10 xl:px-32 space-y-8 lg:space-y-0 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-100"
          } ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
        >
          <div className="w-full lg:w-[43%] flex flex-col justify-between items-start px-2 gap-y-4">
            <h1 className="text-left text-3xl lg:text-4xl l poppins-semibold text-gray-800 font-bold">
              {sectionProps.title}
            </h1>
            <p className="text-sm lg:text-md poppins-light">
              {sectionProps.text}
            </p>
            <div className="flex flex-wrap justify-start gap-8 mt-4">
              {sectionProps.amenities?.map((amenity, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[18%] px-2"
                >
                  <img src={amenity.icon} alt={amenity.label} className="" />
                  <p className="text-xs lg:text-md text-black text-center">
                    {amenity.label}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="/"
              className="bg-[#ccad24] hover:bg-[#a18c2d] text-gray-50 flex justify-center items-center px-4 py-2 rounded-full text-lg gap-x-2"
            >
              Consultá <IoIosContacts className="text-2xl" />
            </a>
          </div>

          <div className={`${isFullscreen ? "w-screen" : "w-full lg:w-2/4"}`}>
            <div
              ref={sliderRef}
              className={`${
                isFullscreen
                  ? "fixed inset-0 z-50 bg-gray-900 bg-opacity-75"
                  : "relative"
              }`}
            >
              {images.length > 1 ? (
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="px-2 relative"
                      onClick={!isFullscreen ? toggleFullScreen : null}
                    >
                      <img
                        src={compressImage(image)}
                        alt={`Slide ${index}`}
                        className={`${
                          isFullscreen
                            ? "h-screen w-full object-contain"
                            : "hover:shadow-xl duration-300 cursor-pointer"
                        }`}
                      />
                      <div className="absolute top-8 right-8 group-hover:block">
                        <button
                          onClick={toggleFullScreen}
                          className="px-3 w-auto h-auto bg-gray-500 bg-opacity-30 hover:bg-opacity-75 rounded-lg opacity-100 duration-150"
                        >
                          {isFullscreen ? (
                            <MdFullscreenExit
                              width={45}
                              className="text-white w-[30px] text-4xl"
                            />
                          ) : (
                            <MdFullscreen   width={45}
                            className="text-white w-[30px] text-4xl" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                images.length === 1 && (
                  <img
                    src={compressImage(images[0])}
                    alt="Imagen única"
                    className="w-full h-auto object-contain cursor-pointer hover:shadow-xl"
                    onClick={toggleFullScreen}
                  />
                )
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SectionCard;
