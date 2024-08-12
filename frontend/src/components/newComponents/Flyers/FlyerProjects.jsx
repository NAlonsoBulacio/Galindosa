import React from "react";
import logo from "../../../assets/logo.png";
import { IoIosContacts } from "react-icons/io";
import { banner3 } from "../../../assets";
const FlyerProjects = ({ banner }) => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center relative h-[38vh] lg:h-[63vh]">
      <div className="z-10 absolute top-[50%] bottom-[50%] w-full flex flex-col justify-center items-center gap-y-4  ">
        <h1 className="poppins-semibold text-gray-50 text-2xl lg:text-4xl text-center w-full ">
          Nuestros Emprendimientos
        </h1>
        <a
          href="/"
          className="bg-[#ccad24] hover:bg-[#a18c2d] duration-300 text-gray-50 flex justify-center items-center px-4 py-2 rounded-full text-sm lg:text-lg gap-x-2 "
        >
          Consultá con un asesor <IoIosContacts className="text-2xl" />
        </a>
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${banner3})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div
        className="absolute block lg:hidden inset-0 z-0"
        style={{
          backgroundImage: `url(${banner3})`,
          backgroundSize: "100% 100%",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default FlyerProjects;
