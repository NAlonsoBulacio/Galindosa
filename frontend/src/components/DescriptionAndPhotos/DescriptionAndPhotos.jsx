import React from "react";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
const DescriptionAndPhotos = () => {
  return (
    <div id="description" className="flex flex-wrap px-4 lg:px-14 py-20 gap-y-6 lg:gap-y-0">
      <div className="hidden lg:flex w-full lg:w-1/2 flex-wrap justify-start items-start">
        <ProjectGallery />
      </div>
      <div className="w-full lg:w-1/2 flex flex-wrap justify-start items-start h-full px-4 lg:px-10">
        <div className="flex flex-wrap items-start h-auto justify-start gap-y-2">
          <div className="w-full">
            <h1 className="text-gray-300 font-plus-300 text-xl">Galindo S.A</h1>
          </div>
          <div className="w-full">
            <h1 className="text-gray-200 font-plus-600 text-3xl">
              Casa a estrenar Yerba buena Jockey club (viejo golf)
            </h1>
          </div>
          <div className="w-full">
            <h1 className="text-gray-300 font-plus-300 text-lg">
              Excelente oportunidad de inversión.
            </h1>
          </div>
          <div className="w-full flex gap-x-2">
            <h1>⭐⭐⭐⭐⭐</h1>
            <a className="underline text-gray-400 hover:text-yellow-500" href="#reviews">
              Reviews
            </a>
          </div>
          <ul className=" w-full space-y-2 list-disc pl-4 ">
            <li className="text-gray-200 font-plus-400 text-md">
              Esta vivienda a estrenar combina de manera perfecta lujo y
              funcionalidad, situada en una ubicación privilegiada en el corazón
              de Yerba Buena. Espacio versátil: La suite puede ubicarse tanto en la
              planta baja como en la alta, ofreciendo flexibilidad para
              adaptarse a diferentes dinámicas familiares. Construcción de
              calidad: Construida por la empresa Galindo, que cuenta con más de
              40 años de experiencia en el rubro, esta propiedad promete calidad
              y atención al detalle.
            </li>
            <li className="text-gray-200 font-plus-400 text-md">
              <span className="font-plus-600">Ubicación inmejorable:</span>{" "}
              Situada en el corazón de Yerba Buena, esta vivienda ofrece la
              combinación ideal de naturaleza y comodidades, estando cerca del
              golf y de todo lo necesario para una vida confortable.
            </li>
            <li className="text-gray-200 font-plus-400 text-md">
              <span className="font-plus-600">Datos clave:</span> Terreno de 365
              m². Superficie construida de 170 m².
            </li>
            <li className="text-gray-200 font-plus-400 text-md">
              Esta es una oportunidad única de adquirir una vivienda excepcional
              en uno de los lugares más exclusivos. No pierda la oportunidad,
              contáctenos para una visita personalizada y descubra el hogar de
              sus sueños.
            </li>
            </ul>
          <div className="w-full flex justify-start items-center">
            <a className="flex justify-start items-center" href="#calendly">
              <button className="text-xl font-plus-500 border-2 rounded-3xl py-2 px-4 transition duration-400 button-calendly">
                Agenda una Visita
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full lg:w-1/2 flex flex-wrap justify-start items-start">
        <ProjectGallery />
      </div>
    </div>
  );
};

export default DescriptionAndPhotos;
