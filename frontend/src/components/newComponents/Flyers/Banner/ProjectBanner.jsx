import React from "react";
import Slider from "react-slick";
import CustomSlide from "./CustomSlide";
import ContactForm from "../../ContactForm/ContactForm";
const Banner = ({ banners, name }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  // const slides = [
  //   {
  //     imgSrc: banners[0],
  //     text: name,
  //   },
  //   {
  //     imgSrc: banners[1],
  //     text: name,
  //   },
  //   {
  //     imgSrc: banners[0],
  //     text: name,
  //   },
  // ];


  return (
    <div className="w-full  bg-white overflow-hidden relative">
      <div className="absolute top-16 right-4 z-30 mx-8 hidden lg:flex justify-center items-center">
        <ContactForm />
      </div>
      {banners ? (
        <Slider {...settings}>
          {banners.map((slide, index) => (
            <CustomSlide key={index} slide={slide} text={name} />
          ))}
        </Slider>
      ) : (
        ""
      )}
    </div>
  );
};

export default Banner;
