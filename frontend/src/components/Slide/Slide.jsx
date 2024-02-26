import React from "react";
import bar from "../../assets/bar.webp";
const Slide = ({ title }) => {
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-start lg:items-center gap-y-[8px] lg:gap-y-4">
      <div className="w-full h-[235px] lg:h-[270px] flex justify-center items-start">
        <div className="w-[235px] lg:w-[270px] h-[235px] lg:h-[270px] rounded-full overflow-hidden bg-purple-500">
          <img className="w-full h-full object-cover" src={bar} alt="" />
        </div>
      </div>
      <div className="w-full flex justify-center items-start px-16">
        <h1 className="h-[80px] text-center text-gray-200 font-plus-400 text-lg lg:text-xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Slide;
