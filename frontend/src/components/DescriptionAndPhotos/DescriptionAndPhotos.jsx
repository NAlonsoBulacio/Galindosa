import React from "react";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
const DescriptionAndPhotos = () => {
  return (
    <div className="flex flex-wrap px-14 py-20">
      <div className="w-1/2">
        <ProjectGallery />
      </div>
      <div className="flex flex-wrap justify-start items-start w-1/2 h-full px-10">
        <div className="flex flex-wrap items-start h-auto justify-start gap-y-2">
          <div className="w-full">
            <h1 className="text-gray-600 font-plus-300 text-xl">Galindo S.A</h1>
          </div>
          <div className="w-full">
            <h1 className="text-gray-800 font-plus-600 text-3xl">
              Tratamiento Anti-Aging Infalible: Crema + Serum + Aceite +
              Contorno + Regalo
            </h1>
          </div>
          <div className="w-full flex gap-x-2">
            <h1>⭐⭐⭐⭐⭐</h1>
            <a className="underline hover:text-yellow-500" href="">Reviews</a>
          </div>
          <div className="w-full">
            <h1 className="text-gray-700 font-plus-400 text-lg">
              El Tratamiento Anti-aging Infalible es la solución
              anti-envejecimiento más efectiva del mercado. Creado a base del
              principio activo patentado por el Dr Jorge Planas, el CMX6, un
              activo natural derivado de la Calendula Officinalis, está
              específicamente diseñado para prevenir eficazmente las arrugas,
              reparar los tejidos celulares de la piel y producir un efecto
              tensor inmediato. Ayuda también a mejorar la salud y calidad de la
              piel, y aliviar alteraciones epidérmicas.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionAndPhotos;
