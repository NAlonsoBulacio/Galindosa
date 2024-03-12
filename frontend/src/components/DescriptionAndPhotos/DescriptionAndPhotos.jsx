import React, { useState } from "react";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
const DescriptionAndPhotos = ({ images, descripciones, descripcionesItems }) => {

  const text1 =
    "Ubicada en el vibrante corazón de Yerba Buena, esta vivienda aestrenar fusiona a la perfección la serenidad de la naturaleza conun acceso inigualable a una amplia gama de comodidades modernas.Situada cerca de un club house que ofrece desde golf hasta ungimnasio completo, piscina, canchas de paddle, fútbol, tenis, yvolley, además de contar con un restaurante y kiosco, estaresidencia promete un estilo de vida activo y pleno.";
  const text2 = "<strong>Datos Clave:</strong> Terreno de 365 m². Superficie construida de 170 m²";
  const text3 = "La casa, que combina lujo y funcionalidad a través de su diseño inteligente, se extiende en dos plantas que optimizan el uso del espacio y maximizan la entrada de luz natural. Destaca por incluir una atractiva piscina y una selección de artefactos de iluminación de vanguardia, que contribuyen a crear un ambiente cálido y acogedor en cada uno de sus rincones. Además, la distribución de la vivienda ofrece una notable flexibilidad, con una suite que puede ubicarse tanto en la planta baja como en la alta, permitiendo adaptar el hogar a las cambiantes necesidades de su familia";

  const textos = [];
  if (descripciones) {
    for (let i = 0; i < descripciones.length; i++) {
      const texto = descripciones[i].text;
      textos.push({ text: texto });
    }
  }
  const textosItems = [];
  if (descripcionesItems) {
    for (let i = 0; i < descripcionesItems.length; i++) {
      const texto = descripcionesItems[i].text;
      textosItems.push({ text: texto });
    }
  }

  const renderItemList = descripcionesItems ? textosItems?.map((desc, index) => (
    <li
      key={index}
      className="text-gray-200 font-plus-400 text-md"
      dangerouslySetInnerHTML={{ __html: desc.text }}
    ></li>
  )) : null;
  const renderList = descripciones ? textos?.map((desc, index) => (
    <li
      key={index}
      className="text-gray-200 font-plus-400 text-md"
      dangerouslySetInnerHTML={{ __html: desc.text }}
    ></li>
  )) : null;
  return (
    <>
      {descripciones ? (
        <div
          id="description"
          className="flex flex-wrap px-4 lg:px-14 py-8 gap-y-6 lg:gap-y-0"
        >
          <div className="hidden lg:flex w-full lg:w-1/2 flex-wrap justify-start items-start">
            <ProjectGallery urls={images ? images : ""} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-wrap justify-start items-start h-full px-4 lg:px-10">
            <div className="flex flex-wrap items-start h-auto justify-start gap-y-2">
              <div className="w-full">
                <h1 className="text-gray-300 font-plus-300 text-xl">
                  Galindo S.A
                </h1>
              </div>
              <div className="w-full">
                <h1 className="text-gray-200 font-plus-600 text-3xl">
                  Casa a estrenar Yerba buena Jockey club (viejo golf)
                </h1>
              </div>
              <div className="flex lg:hidden w-full flex-wrap justify-start items-start">
                <ProjectGallery urls={images ? images : ""} />
              </div>
              <div className="w-full flex gap-x-2">
                <h1>⭐⭐⭐⭐⭐</h1>
                <a
                  className="underline text-gray-400 hover:text-yellow-500"
                  href="#reviews"
                >
                  Reviews
                </a>
              </div>
              <ul className=" w-full space-y-2 list-disc pl-4 ">
                {renderItemList}
              </ul>
              <ul className=" w-full space-y-2 pl-4 ">
                {renderList}
              </ul>
              <div className="w-full flex justify-center lg:justify-start items-center mt-4">
                <a className="flex justify-start items-center" href="#calendly">
                  <button className="text-xl font-plus-600 border-2 rounded-3xl py-2 px-4 transition duration-400 button-calendly">
                    Agendá una Visita
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DescriptionAndPhotos;
