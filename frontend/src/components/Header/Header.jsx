import React from "react";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 right-0 w-screen h-20 bg-gray-200 shadow-lg px-36 py-2 z-40">
      <div className="flex justify-center items-center h-full">
        <img className="h-full" src={logo} alt="logo-galindosa" />
      </div>
      <div className="w-2/3">
        <ul className="flex justify-center items-center space-x-12 font-plus-400 text-gray-600">
          <li>
            <a href="#description">Descripcion</a>
          </li>
          <li>
            <a href="#amenities">Amenidades</a>
          </li>
          <li>
            <a href="#photos">Fotos</a>
          </li>
          <li>
            <a href="#testimonials">Testimonios</a>
          </li>
          <li>
            <a href="#q&a">Q&A</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
