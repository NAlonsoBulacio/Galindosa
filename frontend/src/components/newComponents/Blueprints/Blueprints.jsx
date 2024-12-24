import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import SampleNextArrow from "../../../utils/SampleNextArrow";
import SamplePrevArrow from "../../../utils/SamplePrevArrow";
import compressImage from "../../../utils/compressImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import screenfull from "screenfull";

const BlueprintsCarousel = ({ blueprints }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sliderRef = useRef(null);

  const isIosSafari = /iP(ad|hone|od).+Version\/\d{2}.*Safari/i.test(
    navigator.userAgent
  );

  const toggleFullScreen = () => {
    try {
      if (isIosSafari) {
        // Custom fullscreen for iOS Safari
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
        // Toggle fullscreen using screenfull
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isFullscreen ? 1 : blueprints.length <= 3 ? 3 : 4,
    slidesToScroll: 1,
    dots: !isFullscreen,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-6 lg:pb-4 mb-8 space-y-10 py-8 px-2 lg:px-32 overflow-hidden">
      <h1 className="text-left text-2xl lg:text-3xl poppins-regular text-gray-700">
        Planos
      </h1>
      <div
        ref={sliderRef}
        className={`${
          isFullscreen
            ? "fixed inset-0 z-50 bg-gray-900 bg-opacity-75 sombreado"
            : "w-full"
        }`}
      >
        <div className="relative">
          {blueprints.length === 1 ? (
            <div className="px-2">
              <img
                src={compressImage(blueprints[0])}
                alt="blueprint"
                className={`w-full lg:w-1/3 ${
                  isFullscreen
                    ? "h-screen w-full object-contain"
                    : "hover:shadow-xl duration-300 cursor-pointer"
                }`}
                onClick={toggleFullScreen}
              />
            </div>
          ) : (
            <Slider {...settings}>
              {blueprints.map((print, index) => (
                <div
                  key={index}
                  className="px-2 relative"
                  onClick={!isFullscreen ? toggleFullScreen : null}
                >
                  <img
                    src={compressImage(print)}
                    alt={`Blueprint ${index}`}
                    className={`${
                      isFullscreen
                        ? "h-screen w-full object-contain"
                        : "hover:shadow-xl duration-300 cursor-pointer"
                    }`}
                  />
                  <div className="absolute top-8 right-8">
                    <button
                      onClick={toggleFullScreen}
                      className="px-3 w-auto h-auto bg-gray-500 bg-opacity-30 hover:bg-opacity-75 rounded-lg opacity-100 duration-150"
                    >
                      {isFullscreen ? (
                        <MdFullscreenExit className="text-white w-[30px] text-4xl" />
                      ) : (
                        <MdFullscreen className="text-white w-[30px] text-4xl" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlueprintsCarousel;
