import React, { useState, useEffect } from "react";
import './Carousel.css'
import { GrNext, GrPrevious } from "react-icons/gr";
const MyCarousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, [images]);
  // useEffect(() => {
  //   const autoplayInterval = setInterval(() => {
  //     next();
  //   }, 8000);

  //   return () => {
  //     clearInterval(autoplayInterval);
  //   };
  // }, [selectedIndex]);

  const previous = () => {
    const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const next = () => {
    const condition = selectedIndex < images.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };
  return (
    <div className="flex w-full h-auto justify-center items-center relative">
      <div className="carousel w-full h-auto relative flex overflow-scroll">
        <img
          key={selectedIndex}
          src={selectedImage}
          alt="Imagen carrusel"
          className="carousel-properties image-opacity"
        />
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 flex justify-center items-center text-gray-700 text-xl bg-gray-100 bg-opacity-75 hover:bg-opacity-95 rounded-full h-10 w-10"
          style={{ zIndex: "4" }}
          onClick={previous}
        >
          <GrPrevious />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 flex justify-center items-center text-gray-700 text-xl bg-gray-100 bg-opacity-75 hover:bg-opacity-95 transition-duration duration-200 rounded-full h-10 w-10"
          style={{ zIndex: "4" }}
          onClick={next}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default MyCarousel;
