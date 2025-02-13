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
  const [scale, setScale] = useState(1);
  const [lastTouchDistance, setLastTouchDistance] = useState(null);
  const sliderRef = useRef(null);
  const imageRef = useRef(null);

  const isIosSafari = /iP(ad|hone|od).+Version\/\d{2}.*Safari/i.test(navigator.userAgent);

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
          sliderRef.current.style = "";
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
      setScale(1);
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

  // Manejador de eventos táctiles para zoom
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const touchDistance = getTouchDistance(e.touches);
      setLastTouchDistance(touchDistance);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && lastTouchDistance) {
      const touchDistance = getTouchDistance(e.touches);
      const scaleChange = touchDistance / lastTouchDistance;
      let newScale = Math.min(Math.max(scale * scaleChange, 1), 3);
      setScale(newScale);
      setLastTouchDistance(touchDistance);
    }
  };

  const handleTouchEnd = () => {
    setLastTouchDistance(null);
  };

  // Función para obtener la distancia entre dos toques
  const getTouchDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleDoubleClick = () => {
    setScale(scale === 1 ? 2 : 1);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isFullscreen ? 1 : blueprints.length <= 3 ? 3 : 4,
    slidesToScroll: 1,
    dots: !isFullscreen,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1025, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 769, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-full pb-6 lg:pb-4 mb-8 space-y-10 py-8 px-2 lg:px-32 overflow-hidden">
      <h1 className="text-left text-2xl lg:text-3xl poppins-regular text-gray-700">Planos</h1>
      <div ref={sliderRef} className={`${isFullscreen ? "fixed inset-0 z-50 bg-gray-900" : "w-full"}`}>
        <div className="relative">
          {blueprints.length === 1 ? (
            <div className="px-2">
              <img
                ref={imageRef}
                src={compressImage(blueprints[0])}
                alt="blueprint"
                className={`w-full lg:w-1/3 ${isFullscreen ? "h-screen w-full object-contain" : "hover:shadow-xl cursor-pointer"}`}
                onClick={toggleFullScreen}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onDoubleClick={handleDoubleClick}
                style={{ transform: `scale(${scale})`, transition: "transform 0.2s ease-out" }}
              />
            </div>
          ) : (
            <Slider {...settings}>
              {blueprints.map((print, index) => (
                <div key={index} className="px-2 relative" onClick={!isFullscreen ? toggleFullScreen : null}>
                  <img
                    ref={imageRef}
                    src={compressImage(print)}
                    alt={`Blueprint ${index}`}
                    className={`${isFullscreen ? "h-screen w-full object-contain" : "hover:shadow-xl cursor-pointer"}`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onDoubleClick={handleDoubleClick}
                    style={{ transform: `scale(${scale})`, transition: "transform 0.2s ease-out" }}
                  />
                  <div className="absolute top-8 right-8">
                    <button
                      onClick={toggleFullScreen}
                      className="px-3 w-auto h-auto bg-gray-500 bg-opacity-30 hover:bg-opacity-75 rounded-lg"
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
