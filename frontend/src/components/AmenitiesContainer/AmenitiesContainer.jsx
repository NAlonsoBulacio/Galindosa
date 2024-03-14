import React, { useState } from "react";
import Amenities from "../Amenities/Amenities";
import "../../components/Header/Header.css";
import Carousel from "../../components/Carousel/Carousel";
import { IoMdCloseCircle } from "react-icons/io";
const AmenitiesContainer = ({
  amenities,
  titulo_amenidades,
  subtitulo_amenidades,
}) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenImgs, setFullScreenImgs] = useState(false);
  const handleFullScreen = (images, full) => {
    setFullScreenImgs(images);
    setFullScreen(full);
  };
  // Objeto para mapear amenidades por nombre
  const amenidadesMapeadas = [];

  if (amenities) {
    amenities?.map((amenidad) => {
      const nombreAmenidad = amenidad.attributes.name;
      const alternativeText = amenidad.attributes.alternativeText;
      const caption = amenidad.attributes.caption;
      const url = amenidad.attributes.url;
      let encontrada = false;
      // Verificar si la amenidad ya existe en el objeto mapeado
      for (const mapeada of amenidadesMapeadas) {
        if (mapeada.alternativeText === alternativeText) {
          mapeada.urls.push(url);
          encontrada = true;
          break;
        }
      }

      if (!encontrada) {
        amenidadesMapeadas.push({
          text: caption,
          alternativeText: alternativeText,
          urls: [url],
        });
      }
    });
    console.log(amenidadesMapeadas);
  }
  return (
    <div className="flex flex-wrap justify-center items-center px-4 lg:px-12 lg:py-16 gap-y-10">
      <div
        id="amenities"
        className="flex flex-wrap justify-center items-center "
      >
        <div className="w-full flex flex-wrap justify-center items-center gap-y-2">
          <p
            className="w-full text-center font-plus-600 text-xl lg:text-2xl"
            style={{ color: "#f5c90f" }}
          >
            {titulo_amenidades}
          </p>
          <h1 className="hidden lg:block lg:text-4xl text-center font-plus-600 text-gray-200">
            {subtitulo_amenidades}
          </h1>
          <h1 className="lg:hidden text-2xl text-center font-plus-600 text-gray-200">
            {subtitulo_amenidades}
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-0">
        {amenidadesMapeadas ? (
          <div className="w-full flex flex-wrap justify-center items-center gap-x-4 xl:gap-x-8 ">
            {amenidadesMapeadas?.map((amenitie) => (
              <div className="lg:w-1/4 h-[310px] lg:h-[300px]">
                <Amenities
                  amenitie={amenitie ? amenitie : ""}
                  handleFullScreen={handleFullScreen}
                  // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <div className="w-full flex justify-center items-center">
          <a className="flex justify-center items-center" href="#calendly">
            <button className="text-2xl lg:text-3xl font-plus-600 border-2 rounded-3xl py-2 px-4 transition duration-400 button-calendly">
              Agendá una Visita
            </button>
          </a>
        </div>
        {fullScreen ? (
          <div className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-black z-50">
            <div
              className="absolute top-8 lg:top-4 right-4 lg:right-10 text-5xl lg:text-4xl hover:opacity-50 text-white cursor-pointer"
              onClick={() => handleFullScreen(null, false)}
            >
              <IoMdCloseCircle className="text-gray-200" />
            </div>
            <div className="w-[900px]">
              <Carousel images={fullScreenImgs ? fullScreenImgs : ""} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AmenitiesContainer;
