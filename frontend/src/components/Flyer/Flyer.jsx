import React from "react";
import logoG from "../../assets/logo-g.png";
import "./Flyer.css";
const Flyer = () => {
  return (
    <div className="w-full py-10 md:py-20 lg:py-32 flex flex-wrap justify-center items-center flyer-background ">
      <div className="w-1/3 flex justify-center items-center px-8 md:px-0">
        <img src={logoG} alt="logo" />
      </div>
      <div className="w-2/3 flex justify-center items-center">
        <h1 className="text-gray-900 font-plus-600 text-2xl md:text-3xl lg:text-5xl xl:text-6xl"
                  style={{ lineHeight: "1.3" }}
        >
        40 años de trayectoria definen nuestra identidad.
        </h1>
      </div>
    </div>
  );
};

export default Flyer;
