import React, { useState } from "react";
import logo from "../../assets/logo.png";
import MenuPhone from "../MenuPhone/MenuPhone";
import { IoMenu } from "react-icons/io5";
import "./Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div
        className="z-40 fixed top-0 right-0 w-screen bg-gray-200 mx-auto flex items-center px-10 py-2 pt-2 justify-between lg:hidden"
        style={{ maxWidth: "1150px", height: "110px" }}
      >
        <div className="w-1/2 flex items-center">
          <a href="/">
            <img className="w-[140px]" src={logo} alt="Logo" />
          </a>
        </div>
        <button className="w-1/2 flex justify-center items-center pl-20" onClick={handleMenuToggle}>
          <IoMenu className="text-yellow-400 w-16 h-16 " width={64} />
        </button>
      </div>
      <div className="hidden lg:flex justify-between items-center fixed top-0 right-0 w-screen h-20 bg-gray-200 shadow-lg lg:px-20 xl:px-36 py-2 z-40">
        <div className="flex justify-center items-center h-full">
          <img className="h-full" src={logo} alt="logo-galindosa" />
        </div>
        <div className="w-2/3">
          <ul className="flex justify-center text-lg items-center space-x-12 font-plus-400 text-gray-700">
            <li>
              <a className="underline-on-hover" href="#description">
                Descripcion
              </a>
            </li>
            <li>
              <a className="underline-on-hover" href="#amenities">
                Amenidades
              </a>
            </li>
            <li>
              <a className="underline-on-hover" href="#description">
                Fotos
              </a>
            </li>
            <li>
              <a className="underline-on-hover" href="#reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="underline-on-hover" href="#q&a">
                Q&A
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <a className="flex justify-center items-center" href="#calendly">
            <button className="lg:text-lg xl:text-xl font-plus-600 border-2 rounded-3xl py-2 px-4 transition duration-400 button-calendly">
              Agenda una Visita
            </button>
          </a>
        </div>
      </div>
      <div>
        {menuOpen ? <MenuPhone handleMenuToggle={handleMenuToggle} /> : ""}
      </div>
    </div>
  );
};

export default Header;
