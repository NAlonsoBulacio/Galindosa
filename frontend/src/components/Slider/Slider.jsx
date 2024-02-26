import React, { useEffect, useRef, useState } from "react";
import Slide from "../Slide/Slide";
import { build, bar, jacuzzi, garden, cowork } from "../../assets/index";
import "./Slider.css";
import GoogleMapEmbed from "../GoogleMapEmbed/GoogleMapEmbed";
export const Slider = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexes, setCurrentIndexes] = useState([0, 1]);
  const [marker, setMarker] = useState(0);
  const [buttonClick, setButtonClick] = useState(false);
  const data = [build, bar, jacuzzi, garden, cowork];
  const slides = [
    { title: "Revestimientos de porcelanato" },
    {
      title:
        "Grifería FV Monoconando, sanitarios de Ferrum y mesadas en mármol, garantizando calidad y estilo.",
    },
    {
      title:
        "Muebles bajos y altos de cocina con mesada de Silestone, y una moderna bacha Johnson.",
    },
    { title: "Anafe y horno Orbis." },
    {
      title: "Carpintería de aluminio línea Modena para un diseño sofisticado.",
    },
    { title: "Interiores de placard terminados." },
  ];

  const numSlides = slides.length;
  const containerWidth = numSlides * 100;

  useEffect(() => {
    const listNode = listRef.current;

    if (window.innerWidth <= 768) {
      const imgNode = listNode.querySelectorAll("li ")[currentIndex];
      if (imgNode && buttonClick) {
        imgNode.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
          duration: 500, // Tiempo de duración en milisegundos
        });
      }
    } else {
      const listNode = listRef.current;
      const imgNode = listNode.querySelectorAll("li")[marker];
      if (imgNode && buttonClick) {
        imgNode.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [currentIndex, currentIndexes]);

  const previous = () => {
    setButtonClick(true);
    const condition = currentIndex > 0;
    const nextIndex = condition ? currentIndex - 1 : slides.length - 1;
    setCurrentIndex(nextIndex);
    console.log("PREV");
  };

  const next = () => {
    setButtonClick(true);
    const condition = currentIndex < slides.length - 1;
    const nextIndex = condition ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
    console.log("NEXT");
  };
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

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  return (
    <div className="w-full h-auto flex flex-wrap justify-center items-center px-4">
      <div className="w-full flex flex-wrap justify-center items-center gap-y-2 px-0 lg:px-32">
        <p
          className="w-full text-center font-plus-600 text-xl lg:text-2xl"
          style={{ color: "#f5c90f" }}
        >
          Detalles de lujo
        </p>
        <h1 className="hidden lg:block lg:text-3xl text-center font-plus-600 text-gray-200">
          Construida por la empresa Galindo, que cuenta con más de 40 años de
          experiencia en el rubro, esta propiedad promete calidad y atención al
          detalle.
        </h1>
        <h1 className="lg:hidden text-xl text-center font-plus-600 text-gray-200">
          Construida por la empresa Galindo, que cuenta con más de 40 años de
          experiencia en el rubro, esta propiedad promete calidad y atención al
          detalle.
        </h1>
      </div>
      <div className="w-full lg:w-[1000px] h-[460px] lg:h-[440px] m-auto bg-gray-800 rounded-lg my-14">
        <div className="relative h-full">
          <div
            className="flex lg:hidden leftArrow"
            onTouchStart={() => previous()}
            onTouchEnd={() => setButtonClick(false)}
          >
            &#10092;
          </div>
          <div
            className="flex lg:hidden rightArrow"
            onTouchStart={() => next()}
            onTouchEnd={() => setButtonClick(false)}
          >
            &#10093;
          </div>
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
            >
              {slides.map((item, index) => {
                return (
                  <li
                    className="w-full min-w-full lg:min-w-[50%] lg:w-1/2 float-left"
                    key={index}
                  >
                    <div className="w-full lg:w-[500px] h-[360px] lg:h-[400px] slider-li flex justify-center items-center">
                      <Slide title={item.title} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <GoogleMapEmbed />
      </div>
    </div>
  );
};

export default Slider;
