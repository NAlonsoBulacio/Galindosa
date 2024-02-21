import React from "react";
import background from '../../assets/pattern.png';
const Flyer = () => {
  return (
    <div className="w-full py-32 flex flex-wrap justify-center items-center space-y-16"
    style={{ backgroundImage: `url(${background})` }}>
      <div>
        <h1 className="text-white font-plus-500 text-5xl">Construimos con Innovación
</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="w-auto text-2xl font-poppins-400 text-white border-2 border-white rounded-lg p-2 hover:bg-white hover:text-purple-900 transition duration-400">
          Agendar Demo
        </button>
      </div>
    </div>
  );
};

export default Flyer;
