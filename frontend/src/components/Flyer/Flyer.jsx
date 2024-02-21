import React from "react";
import background from "../../assets/pattern.png";
import "./Flyer.css"
const Flyer = () => {
  return (
    <div className="w-full py-32 flex flex-wrap justify-center items-center space-y-16 flyer-background">
      <div>
        <h1 className="text-gray-800 font-plus-500 text-6xl">
          Construimos con Innovación
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="w-auto text-2xl font-plus-500 text-gray-800 border-[3px] border-gray-800 rounded-lg p-2 hover:bg-gray-800 hover:text-white transition duration-400">
          Agendar Demo
        </button>
      </div>
    </div>
  );
};

export default Flyer;
