"use client";

import { useState, useEffect, useRef } from "react";
import { IoIosContacts } from "react-icons/io";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import compressImage from "../../utils/compressImage";
import screenfull from "screenfull";

const SectionCard = ({ section, index }) => {
  const [sectionProps, setSectionProps] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setSectionProps(section);
  }, [section]);

  const isIosSafari = /iP(ad|hone|od).+Version\/\d{2}.*Safari/i.test(
    navigator.userAgent
  );

  const toggleFullScreen = () => {
    try {
      if (isIosSafari) {
        if (!isFullscreen) {
          sliderRef.current.style.position = "fixed";
          sliderRef.current.style.top = "0";
          sliderRef.current.style.left = "0";
          sliderRef.current.style.width = "100vw";
          sliderRef.current.style.height = "100vh";
          sliderRef.current.style.zIndex = "9999";
          sliderRef.current.style.backgroundColor = "black";
        } else {
          sliderRef.current.style.position = "";
          sliderRef.current.style.top = "";
          sliderRef.current.style.left = "";
          sliderRef.current.style.width = "";
          sliderRef.current.style.height = "";
          sliderRef.current.style.zIndex = "";
          sliderRef.current.style.backgroundColor = "";
        }
        setIsFullscreen(!isFullscreen);
      } else if (screenfull.isEnabled) {
        screenfull.toggle(sliderRef.current);
        setIsFullscreen(!isFullscreen);
      } else {
        console.warn("Fullscreen mode is not supported on this browser.");
      }
    } catch (error) {
      console.error("Error toggling fullscreen mode:", error);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(screenfull.isFullscreen);
    };

    if (screenfull.isEnabled) {
      screenfull.on("change", handleFullscreenChange);
    }

    return () => {
      if (screenfull.isEnabled) {
        screenfull.off("change", handleFullscreenChange);
      }
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
            <h1 className="text-left text-3xl lg:text-4xl poppins-semibold text-gray-800 font-bold">
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
              href="https://wa.me/+5493812071244"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: "contact",
                  eventCategory: "Interacción",
                  eventAction: "Click en botón de consulta",
                  eventLabel: sectionProps?.title || "Sección sin título",
                  content_type: "contact",
                });
              }}
              className="wp-btn bg-[#ccad24] hover:bg-[#a18c2d] text-gray-50 flex justify-center items-center px-4 py-2 rounded-full text-lg gap-x-2"
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
                            <MdFullscreen
                              width={45}
                              className="text-white w-[30px] text-4xl"
                            />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                images.length === 1 && (
                  <>
                    <img
                      src={compressImage(images[0])}
                      alt="Imagen única"
                      className="w-full h-auto object-contain cursor-pointer hover:shadow-xl"
                      onClick={toggleFullScreen}
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
                          <MdFullscreen
                            width={45}
                            className="text-white w-[30px] text-4xl"
                          />
                        )}
                      </button>
                    </div>
                  </>
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
