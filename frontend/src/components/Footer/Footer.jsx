import React from "react";
import { AiTwotonePhone, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center py-6 bg-gray-200">
      <div className="w-full flex flex-wrap justify-center items-start px-10 sm:px-10 md:px-20 lg:px-28 py-10 space-x-0 lg:space-x-14 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-[40%] flex flex-wrap justify-start items-center space-y-6">
          <img src={logo} alt="logo" className="w-1/3" />
          <div className="w-full ">
            <h1 className="text-gray-800 font-plus-500 text-left text-xl">
              40 años de trayectoria definen nuestra identidad.
            </h1>
          </div>
          <div className="w-full flex justify-start items-center space-x-4">
            <a
              href="https://www.facebook.com/galindosatucuman?mibextid=opq0tG"
              target="_blank"
            >
              <BiLogoFacebook className=" text-gray-500 text-4xl lg;text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/galindosa_tuc?igsh=OXVrODZsbzMwemJz"
              target="_blank"
            >
              <AiOutlineInstagram className=" text-gray-500 text-4xl lg;text-2xl" />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex flex-wrap justify-center items-center space-y-6">
          <div className="w-full flex justify-start items-center text-left text-3xl text-gray-800">
            <h1>Contacto</h1>
          </div>
          <div className="w-full flex flex-wrap justify-start items-center text-left text-lg text-gray-600 space-y-4">
            <a
              className="w-full flex justify-start items-start"
            >
              <AiTwotonePhone className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>+54 9 3812 07-1244</h1>
            </a>
            <a
              href="Info@galindosa.com.ar"
              target="_blank"
              className="w-full flex justify-start items-start"
            >
              <IoMailOutline className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>Info@galindosa.com.ar</h1>
            </a>
            <a
              className="w-full flex justify-start items-start"
            >
              <BsPinMapFill className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>Virgen de la Merced 639, San Miguel de Tucumán, Tucumán, Argentina</h1>
            </a>
            <a
              href="https://wa.me/+5493812071244"
              target="_blank"
              className="w-full flex justify-start items-start"
            >
              <FaWhatsapp className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>+54 9 3812 07-1244</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
