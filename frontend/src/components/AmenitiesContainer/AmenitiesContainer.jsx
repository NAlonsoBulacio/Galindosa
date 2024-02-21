import React from "react";
import Amenities from "../Amenities/Amenities";
import { build, bar, jacuzzi, garden, cowork } from "../../assets/index";
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
    <div id="amenities" className="flex flex-wrap justify-center items-center py-20 px-12 gap-y-10">
      <div className="w-full flex flex-wrap justify-center items-center gap-y-2">
        <p className="w-full text-center font-plus-600 text-2xl"
        style={{color: "#f5c90f"}}
        >
          Amenidades
        </p>
        <h1 className="text-5xl text-center font-plus-600 text-gray-800">
          Resultados demostrados al cabo de{" "}
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-y-20 gap-x-8 ">
        {amenities?.map((amenitie) => (
          <div className="w-1/4 h-[400px]">
            <Amenities
              img={amenitie.img}
              title={amenitie.title}
              description={amenitie.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesContainer;
