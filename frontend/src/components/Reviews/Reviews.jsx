import React, { useState } from "react";
import man from "../../assets/man.svg";
import woman from "../../assets/woman.svg";
const Reviews = () => {
  return (
    <div className="flex flex-wrap justify-center items-start px-32 my-20 h-[400px]">
      <div className="w-2/5 flex flex-wrap items-start justify-end gap-y-8 pr-8">
        <div className="w-full border-gray-500 shadow-lg flex justify-between items-start px-10 py-4 h-[100px] cursor-pointer">
          <div className="h-full flex justify-center items-center">
            <img src={man} width={60} height={60} alt="man-client" />
          </div>
          <div className="flex flex-wrap justify-center items-start h-full">
            <h1 className="w-full text-center text-2xl font-plus-500 text-gray-800">
              Rodrigo Perez
            </h1>
            <p className="w-full text-center text-lg font-plus-300 text-gray-700">
              Cliente de Galindosa
            </p>
          </div>
          <div className="flex items-start justify-center">
            <h1>⭐⭐⭐⭐⭐</h1>
          </div>
        </div>
        <div className="w-full border-gray-500 shadow-lg flex justify-between items-start px-10 py-4 h-[100px]">
          <div className="h-full flex justify-center items-center">
            <img src={woman} width={60} height={60} alt="man-client" />
          </div>
          <div className="flex flex-wrap justify-center items-start h-full">
            <h1 className="w-full text-center text-2xl font-plus-500 text-gray-800">
              Rodrigo Perez
            </h1>
            <p className="w-full text-center text-lg font-plus-300 text-gray-700">
              Cliente de Galindosa
            </p>
          </div>
          <div className="flex items-start justify-center">
            <h1>⭐⭐⭐⭐⭐</h1>
          </div>
        </div>
        <div className="w-full border-gray-500 shadow-lg flex justify-between items-start px-10 py-4 h-[100px]">
          <div className="h-full flex justify-center items-center">
            <img src={man} width={60} height={60} alt="man-client" />
          </div>
          <div className="flex flex-wrap justify-center items-start h-full">
            <h1 className="w-full text-center text-2xl font-plus-500 text-gray-800">
              Rodrigo Perez
            </h1>
            <p className="w-full text-center text-lg font-plus-300 text-gray-700">
              Cliente de Galindosa
            </p>
          </div>
          <div className="flex items-start justify-center">
            <h1>⭐⭐⭐⭐⭐</h1>
          </div>
        </div>
      </div>
      <div className="w-auto h-full border border-gray-400"></div>
      <div className="w-2/5 flex flex-wrap items-start justify-start pl-8">
        <div className="w-full">
          <h1>⭐⭐⭐⭐⭐</h1>
        </div>
        <div className="w-full">
          <h1>
            Espectacular! Incomparable con cremas de 600€. Efectividad en 3-4
            días.
          </h1>
        </div>
        <div className="w-full">
          <p>20/01/2022</p>
        </div>
        <div className="w-full">
          <p>
            El cóctel de serum más crema es espectacular!!!! Incomparable con
            cremas de 600€, muchísimo mejor y efectivad en 3-4 días.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
