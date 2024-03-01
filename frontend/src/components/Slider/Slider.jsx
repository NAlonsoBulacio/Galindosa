import React, { useEffect, useRef, useState } from "react";
import Slide from "../Slide/Slide";
import "./Slider.css";
import GoogleMapEmbed from "../GoogleMapEmbed/GoogleMapEmbed";
export const Slider = ({ details, longitud, latitud, titulo_detalles }) => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexes, setCurrentIndexes] = useState([0, 1]);
  const [marker, setMarker] = useState(0);
  const [buttonClick, setButtonClick] = useState(false);
  const slides = details ? details : "";
  const numSlides = slides.length;
  const containerWidth = numSlides * 100;

  useEffect(() => {
    const listNode = listRef.current;

    if (window.innerWidth <= 768 && details) {
      const imgNode = listNode.querySelectorAll("li ")[currentIndex];
      if (imgNode && buttonClick) {
        imgNode.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
          duration: 500,
        });
      }
    } else {
      if (details) {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li")[marker];
        if (imgNode && buttonClick) {
          imgNode.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }
    }
  }, [currentIndex, currentIndexes]);

  const previousArray = () => {
    setButtonClick(true);
    const [firstIndex, secondIndex] = currentIndexes;
    const newFirstIndex = firstIndex === 0 ? numSlides - 2 : firstIndex - 1;
    const newSecondIndex = firstIndex === 0 ? numSlides - 1 : secondIndex - 1;
    if (newSecondIndex === numSlides - 1) {
      setMarker(numSlides - 1);
      setCurrentIndexes([newFirstIndex, newSecondIndex]);
    } else {
      setMarker(newFirstIndex);
      setCurrentIndexes([newFirstIndex, newSecondIndex]);
    }
  };

  const nextArray = () => {
    setButtonClick(true);
    const [firstIndex, secondIndex] = currentIndexes;
    const newFirstIndex = secondIndex === numSlides - 1 ? 0 : firstIndex + 1;
    const newSecondIndex = secondIndex === numSlides - 1 ? 1 : secondIndex + 1;
    if (newFirstIndex === 0) {
      setMarker(0);
      setCurrentIndexes([newFirstIndex, newSecondIndex]);
    } else {
      setMarker(newSecondIndex);
      setCurrentIndexes([newFirstIndex, newSecondIndex]);
    }
  };

  return (
    <>
      {slides ? (
        <div className="w-full h-auto flex flex-wrap justify-center items-center px-4 py-10">
          <div className="w-full flex flex-wrap justify-center items-center gap-y-2 px-0 lg:px-32">
            <p
              className="w-full text-center font-plus-600 text-xl lg:text-2xl"
              style={{ color: "#f5c90f" }}
            >
              Detalles de lujo
            </p>
            <h1 className="hidden lg:block lg:text-3xl text-center font-plus-600 text-gray-200">
            {titulo_detalles}
            </h1>
            <h1 className="lg:hidden text-xl text-center font-plus-600 text-gray-200">
              {titulo_detalles}
            </h1>
          </div>
          <div className="w-full lg:w-[1000px] h-[460px] lg:h-[440px] m-auto bg-gray-800 rounded-lg my-14">
            <div className="relative h-full">
              <div
                className="hidden lg:flex leftArrow"
                onClick={() => previousArray()}
              >
                &#10092;
              </div>
              <div
                className="hidden lg:flex  rightArrow"
                onClick={() => nextArray()}
              >
                &#10093;
              </div>

              <div className="w-full h-full flex items-center justify-center border-2 border-gray-700 rounded-xl overflow-hidden slider-frame">
                <ul
                  ref={listRef}
                  className={`w-${containerWidth}vw h-full flex items-center slider-ul overflow-x-hidden`}
                  style={{
                    overflowX: "scroll",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {slides?.map((item, index) => {
                    return (
                      <li
                        className="w-full min-w-full lg:min-w-[50%] lg:w-1/2 float-left"
                        key={index}
                      >
                        <div className="w-full lg:w-[500px] h-[360px] lg:h-[400px] slider-li flex justify-center items-center pt-6 lg:pt-8">
                          <Slide detail={item} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex lg:hidden w-full justify-end text-right">
                <h1 className="text-gray-300 text-xl p-2 ">
                  Deslizar para ver mas ⮕
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <GoogleMapEmbed
              latitud={latitud ? latitud : ""}
              longitud={longitud ? longitud : ""}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Slider;
