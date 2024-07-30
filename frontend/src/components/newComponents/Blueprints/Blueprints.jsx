import React  from "react";
import Slider from "react-slick";
import SampleNextArrow from "../../Arrows/SampleNextArrow";
import SamplePrevArrow from "../../Arrows/SamplePrevArrow";
const BlueprintsCarousel = ({blueprints}) => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      blueprints === 1
        ? 1
        : blueprints === 2
        ? 2
        : blueprints === 3
        ? 3
        : 4,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-6 lg:pb-4 mb-8  space-y-10 py-8 lg:px-32 ">
      <h1 className="text-left text-2xl lg:text-3xl poppins-regular text-gray-700">
       Planos del proyecto
      </h1>
      <Slider {...settings}>
        {blueprints?.map((print, index) => (
          <div key={index} className="px-2 ">
           <img src={print} alt="print" className="hover:shadow-xl duration-300 cursor-pointer" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlueprintsCarousel;
