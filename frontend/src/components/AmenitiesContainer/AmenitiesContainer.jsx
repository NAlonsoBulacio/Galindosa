import React from "react";
import Amenities from "../Amenities/Amenities";
import {  build, bar, jacuzzi, garden, cowork} from "../../assets/index";
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
    <div className="flex flex-wrap justify-center items-center gap-y-20 gap-x-8 py-20 px-12">
      {amenities?.map((amenitie) => (
        <div className="w-1/4 h-[400px]">
          <Amenities img={amenitie.img} title={amenitie.title} description={amenitie.description}/>
        </div>
      ))}
    </div>
  );
};

export default AmenitiesContainer;
