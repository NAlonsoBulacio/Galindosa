import React from "react";
import Amenities from "../Amenities/Amenities";
import { build, slide1, slide2 } from "../../assets/index";
const AmenitiesContainer = () => {
  const amenities = [
    {
      title: "Piscina",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: build,
    },
    {
      title: "Piscina",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: build,
    },
    {
      title: "Piscina",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: build,
    },
  ];

  return (
    <div className="flex gap-x-8 py-20 px-12">
      {amenities?.map((amenitie) => (
        <div className="w-1/3 h-[230px]">
          <Amenities img={amenitie.img} title={amenitie.title} description={amenitie.description}/>
        </div>
      ))}
    </div>
  );
};

export default AmenitiesContainer;
