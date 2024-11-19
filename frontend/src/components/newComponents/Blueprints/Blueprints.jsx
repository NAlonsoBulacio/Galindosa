import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import SampleNextArrow from "../../../utils/SampleNextArrow";
import SamplePrevArrow from "../../../utils/SamplePrevArrow";
// import SampleNextArrow from "../../Arrows/SampleNextArrow";
// import SamplePrevArrow from "../../Arrows/SamplePrevArrow";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import compressImage from "../../../utils/compressImage";

const BlueprintsCarousel = ({ blueprints }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sliderRef = useRef(null);

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
    <div className="w-full pb-6 lg:pb-4 mb-8 space-y-10 py-8 px-2 lg:px-32">
      <h1 className="text-left text-2xl lg:text-3xl poppins-regular text-gray-700">
        Planos 
      </h1>
      <div
        ref={sliderRef}
        className={`${
          isFullscreen
            ? "w-screen h-screen  fixed inset-0 z-50 bg-black bg-opacity-75"
            : "w-full"
        }`}
      >
        <div className="relative">
          {blueprints.length === 1 ? (
            <div className="px-2 " onClick={!isFullscreen && toggleFullScreen}>
              <img
                src={compressImage(blueprints[0])}
                alt="blueprint"
                className={` w-full lg:w-1/3 ${
                  isFullscreen
                    ? "h-screen w-full object-contain"
                    : "hover:shadow-xl duration-300 cursor-pointer"
                }`}
              />{" "}
            </div>
          ) : (
            <Slider {...settings}>
              {blueprints.map((print, index) => (
                <div
                  key={index}
                  className="px-2 relative"
                  onClick={!isFullscreen && toggleFullScreen}
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

                  {isFullscreen && (
                    <div className="absolute top-8 right-8 group-hover:block">
                      <button
                        onClick={toggleFullScreen}
                        className="w-auto h-auto bg-gray-500 bg-opacity-30 hover:bg-opacity-75 opacity-100 lg:opacity-0 group-hover:opacity-100 duration-150 rounded-lg"
                      >
                        <MdFullscreenExit className="text-white w-full text-[60px]" />
                      </button>
                    </div>
                  )}
                  {!isFullscreen && (
                    <div className="z-40 absolute top-8 right-8  group-hover:block">
                      <button
                        onClick={toggleFullScreen}
                        className="w-auto h-auto bg-gray-500 bg-opacity-30 hover:bg-opacity-75 rounded-lg opacity-100 lg:opacity-0 group-hover:opacity-100 duration-150"
                      >
                        <MdFullscreen className="text-white w-full text-4xl" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          )}
          {/* <div className="absolute top-8 right-8 z-50">
            <button
              onClick={toggleFullScreen}
              className="w-auto h-auto bg-gray-500 bg-opacity-30 hover:bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 duration-150"
            >
              {isFullscreen ? (
                <MdFullscreenExit className="text-white text-4xl" />
              ) : (
                <MdFullscreen className="text-white text-4xl" />
              )}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlueprintsCarousel;
