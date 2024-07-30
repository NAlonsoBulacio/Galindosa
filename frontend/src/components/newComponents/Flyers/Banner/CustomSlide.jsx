import React from "react";
import Image from "./Image";
const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => {
  return (
    <div className="relative flex justify-start items-start h-[200px] lg:h-[100vh]">
      <img className=" h-full object-cover" src={imgSrc} alt="sasd" />
      {/* <a
        href={buttonLink}
        className="cursor-pointer rounded-sm absolute bottom-8 lg:bottom-20 left-10 lg:left-24 uppercase text-xs lg:text-xl p-3 lg:p-4 bg-gray-900 hover:bg-[#fc148c] duration-300 text-gray-50"
      >
        {buttonText}
      </a> */}
    </div>
  );
};

export default CustomSlide;
