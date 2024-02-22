import React from "react";
import Amenities from "../Amenities/Amenities";
import { build, bar, jacuzzi, garden, cowork } from "../../assets/index";
import GoogleMapEmbed from "../GoogleMapEmbed/GoogleMapEmbed";
import "../../components/Header/Header.css"
const AmenitiesContainer = () => {
  const amenities = [
    {
      title: "Piscina",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: build,
    },
    {
      title: "Bar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: bar,
    },
    {
      title: "Cowork",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: cowork,
    },
    {
      title: "Jardin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: garden,
    },
    {
      title: "Jacuzzi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: jacuzzi,
    },
  ];

  return (
    <div
      id="amenities"
      className="flex flex-wrap justify-center items-center py-20 px-4 lg:px-12 gap-y-10"
    >
      <div className="w-full flex flex-wrap justify-center items-center gap-y-2">
        <p
          className="w-full text-center font-plus-600 text-xl lg:text-2xl"
          style={{ color: "#f5c90f" }}
        >
          Amenidades
        </p>
        <h1 className="hidden lg:block lg:text-4xl text-center font-plus-600 text-gray-200">
        La propiedad, desarrollada en dos plantas, ofrece un<br/> espacio amplio y bien distribuido, destacándose por:
        </h1>
        <h1 className="lg:hidden text-2xl text-center font-plus-600 text-gray-200">
        La propiedad, desarrollada en <br/>dos plantas, ofrece un espacio amplio y bien distribuido, <br/>destacándose por:
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-y-20 gap-x-8 ">
        {amenities?.map((amenitie) => (
          <div className="w-full lg:w-1/4 h-[400px]">
            <Amenities
              img={amenitie.img}
              title={amenitie.title}
              description={amenitie.description}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center pt-10">
          <a className="flex justify-center items-center" href="#calendly">
            <button className="text-3xl font-plus-600 border-2 rounded-3xl py-2 px-4 transition duration-400 button-calendly">
              Agenda una Visita
            </button>
          </a>
      </div>
      <div className="w-full flex justify-center items-center">
        <GoogleMapEmbed />
      </div>
    </div>
  );
};

export default AmenitiesContainer;
