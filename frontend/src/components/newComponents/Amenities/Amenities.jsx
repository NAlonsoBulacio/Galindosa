import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { bg_yellow } from "../../../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "../../Arrows/SampleNextArrow";
import SamplePrevArrow from "../../Arrows/SamplePrevArrow";

const Amenities = ({ amenities }) => {
const [categories, setCategories] = useState("");

  useEffect(() => {
    setCategories(amenities);
  }, [amenities]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {categories ? (
        <div
          className="relative bg-cover bg-center text-white py-10 lg:px-32 "
          // style={{ backgroundImage: `url(${bg_yellow})` }}
        >
          <h1 className="text-center text-3xl poppins-regular text-gray-700">Amenidades</h1>
          <Slider {...settings}>
            {categories?.map((category, index) => (
              <div key={index} className="p-4 ">
                <div className=" p-6 rounded-lg shadow-lg text-center">
                  <img
                    src={category.icon}
                    alt={category.label}
                    className="mx-auto mb-4 w-16 h-16"
                  />
                  <div className="text-xl poppins-regular text-gray-900">{category.label}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Amenities;
