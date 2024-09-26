import React from "react";

const CustomSlide = ({  slide, text }) => {
  return (
    <div className="relative flex justify-start items-start w-full h-[200px] lg:h-[100vh]">
      <img
        className="w-full object-cover "
        src={slide}
        alt="slide image"
      />
     <h1 className="absolute top-[50%] left-8 mx-6 lg:mx-0 text-2xl lg:text-5xl poppins-bold text-white text-balance">{text}</h1>
    </div>
  );
};

export default CustomSlide;
