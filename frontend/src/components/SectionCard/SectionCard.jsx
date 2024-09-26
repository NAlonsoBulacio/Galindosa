import React, { useState, useEffect, useRef } from "react";
import { IoIosContacts } from "react-icons/io";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { amenities } from "../../utils"; // Asegúrate de importar las amenidades correctamente

const SectionCard = ({ section, index }) => {
  const [sectionProps, setSectionProps] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setSectionProps(section);
  }, [section]);

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
  const images = section ? section.images : "";

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !isFullscreen ? true : false,
    nextArrow: isFullscreen ? <SampleNextArrow /> : null,
    prevArrow: isFullscreen ? <SamplePrevArrow /> : null,
  };

  const imagesLength = images?.length;
  console.log(imagesLength);

  return (
    <>
      {sectionProps ? (
        <div
          className={`flex flex-wrap justify-between items-start py-20 px-0 lg:px-10 xl:px-32 space-y-8 lg:space-y-0 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-100"
          } ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
        >
          <div className="w-full lg:w-[43%] flex flex-col justify-between items-start px-2 gap-y-4">
            <h1 className="text-left text-3xl lg:text-4xl l poppins-regular text-gray-800 font-bold">
              {sectionProps.title}
            </h1>
            <p className="text-sm lg:text-md poppins-light">
              {sectionProps.text}
            </p>
            <div className="flex flex-wrap justify-start gap-6 mt-4">
              {sectionProps.amenities?.map((amenity, index) => (
                <div key={index} className="flex flex-col items-center w-[15%]">
                  <img src={amenity.icon} alt={amenity.label} className="" />
                  <p className="text-lg text-black text-center">
                    {amenity.label}
                  </p>
                </div>
              ))}
            </div>
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
            {images.length === 1 ? (
              <div
                ref={sliderRef}
                className={`w-full lg:w-[80%] h-auto flex justify-center items-center px-2 ${
                  isFullscreen
                    ? "fixed lg:w-full inset-0 z-50 bg-gray-900 bg-opacity-75"
                    : ""
                }`}
              >
                <div
                  className={`w-full h-[320px] rounded-xl overflow-hidden  ${
                    isFullscreen ? "w-[80%] h-full" : ""
                  }`}
                >
                  <img
                    src={images[0]}
                    alt={`Slide 1`}
                    className={`w-full ${
                      isFullscreen ? "max-h-full" : "object-cover h-[320px]"
                    }`}
                  />
                </div>
              </div>
            ) : images.length !== 1 ? (
              <div
                ref={sliderRef}
                className={`w-full lg:w-[80%] h-auto flex justify-center items-center px-2 ${
                  isFullscreen
                    ? "fixed lg:w-full inset-0 z-50 bg-gray-900 bg-opacity-75"
                    : ""
                }`}
              >
                <div
                  className={`w-full h-[320px] rounded-xl overflow-hidden  ${
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
                          isFullscreen ? "flex justify-center items-center" : ""
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
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SectionCard;
