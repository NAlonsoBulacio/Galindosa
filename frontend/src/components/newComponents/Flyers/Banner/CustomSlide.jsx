import React from "react";
import compressImage from "../../../../utils/compressImage";

const CustomSlide = ({ slide, text }) => {
  return (
    <div className="relative flex justify-start items-start w-full h-[200px] lg:h-[100vh]">
      <img
        className="w-full object-cover"
        src={compressImage(slide)}
        alt="slide image"
      />
      {/* Div para la sombra sólida */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      {/* Texto sobre la sombra */}
      <h1 className="absolute top-[50%] left-8 mx-6 lg:mx-0 text-2xl lg:text-5xl poppins-bold text-white z-10">{text}</h1>
    </div>
  );
};

export default CustomSlide;
