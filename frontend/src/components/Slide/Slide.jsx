import React from "react";
const Slide = ({ detail }) => {
  return (
    <>
    {detail ?
    <div className="w-full h-full flex flex-wrap justify-center items-start lg:items-center gap-y-[8px] lg:gap-y-4">
      <div className="w-full h-[265px] lg:h-[270px] flex justify-center items-start">
        <div className="w-[265px] lg:w-[270px] h-[255px] lg:h-[250px] rounded-xl overflow-hidden bg-purple-500">
          <img className="w-full h-full object-cover" src={detail.img} alt="" />
        </div>
      </div>
      <div className="w-full flex justify-center items-start px-6 lg:px-16">
        <h1 className="h-[80px] text-center text-gray-200 font-plus-500 text-lg lg:text-xl">
         {detail.title}
        </h1>
      </div>
    </div>
     : ""}
    </>
  );
};

export default Slide;
