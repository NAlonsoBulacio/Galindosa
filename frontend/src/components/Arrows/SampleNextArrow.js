import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className=" rounded-full text-white bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-6"
      onClick={onClick}
    >
      <span className="text-4xl hover:scale-110 duration-300">
        <IoIosArrowDroprightCircle />
      </span>
    </div>
  );
};

export default SampleNextArrow;
