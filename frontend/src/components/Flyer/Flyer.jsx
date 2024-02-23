import React from "react";
import logoG from "../../assets/logo-g.png";
import "./Flyer.css";
const Flyer = () => {
  return (
    <div className="w-full md:px-0 py-10 md:py-20 lg:py-32 flex flex-wrap justify-center items-center space-x-4 px-4 flyer-background">
      <div className="w-1/4 md:w-1/4 flex justify-center items-center">
        <div className="w-[80px] h-[80px] lg:w-[125px] lg:h-[125px] flex justify-center items-center rounded-full bg-gray-800 pr-2">
          <img className="w-[55px] lg:w-[90px]" src={logoG} alt="logo" />
        </div>
      </div>
      <div className="w-[65%] flex justify-center items-center">
        <h1
          className="text-gray-900 font-plus-600 text-xl md:text-3xl lg:text-5xl xl:text-6xl"
          style={{ lineHeight: "1.3" }}
        >
          40 años de trayectoria definen nuestra identidad.
        </h1>
      </div>
    </div>
  );
};

export default Flyer;
