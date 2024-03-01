import React from "react";
import Amenities from "../Amenities/Amenities";
import "../../components/Header/Header.css";
const AmenitiesContainer = ({ amenities, titulo_amenidades, subtitulo_amenidades }) => {
  // const amenities = [
  //   {
  //     title: "Piscina",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     img: build,
  //   },
  //   {
  //     title: "Bar",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     img: bar,
  //   },
  //   {
  //     title: "Cowork",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     img: cowork,
  //   },
  //   {
  //     title: "Jardin",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     img: garden,
  //   },
  //   {
  //     title: "Jacuzzi",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     img: jacuzzi,
  //   },
  // ];

  return (
    <div
      id="amenities"
      className="flex flex-wrap justify-center items-center py-12 lg:py-16 px-4 lg:px-12 gap-y-10"
    >
      <div className="w-full flex flex-wrap justify-center items-center gap-y-2">
        <p
          className="w-full text-center font-plus-600 text-xl lg:text-2xl"
          style={{ color: "#f5c90f" }}
        >
          {titulo_amenidades}
        </p>
        <h1 className="hidden lg:block lg:text-4xl text-center font-plus-600 text-gray-200"
        
        >
          {subtitulo_amenidades}
        </h1>
        <h1 className="lg:hidden text-2xl text-center font-plus-600 text-gray-200">
          {subtitulo_amenidades}
        </h1>
      </div>

      {amenities ? (
        <div className="w-full flex flex-wrap justify-center items-center gap-y-20 lg:gap-y-10 gap-x-8 ">
          {amenities?.map((amenitie) => (
            <div className="w-full lg:w-1/4 h-[310px] lg:h-[400px]">
              <Amenities
                amenitie={amenitie ? amenitie : ""}
                // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="w-full flex justify-center items-center pt-10">
        <a className="flex justify-center items-center" href="#calendly">
          <button className="text-3xl font-plus-600 border-2 rounded-3xl py-2 px-4 transition duration-400 button-calendly">
            Agenda una Visita
          </button>
        </a>
      </div>
      {/* <div className="w-full flex justify-center items-center">
        <GoogleMapEmbed />
      </div> */}
    </div>
  );
};

export default AmenitiesContainer;
