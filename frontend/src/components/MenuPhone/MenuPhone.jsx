import React from "react";
import "./MenuPhone.css";
import { AiOutlineClose } from "react-icons/ai";
const MenuPhone = ({ menuOpen, handleMenuToggle }) => {
  return (
    <div className="menu-phone fixed top-0 right-0 w-full flex justify-start pt-32 items-start font-poppins-400 bg-gray-200">
      <div className="menu-container w-full flex flex-wrap justify-start items-center px-6 text-gray-700">
        <a className="w-full" href="/" onClick={handleMenuToggle}>
          Inicio
        </a>
        <a className="w-full"  href="#process" onClick={handleMenuToggle}>
          Nuestro Proceso
        </a>
        <a className="w-full"  href="#about" onClick={handleMenuToggle}>
          Sobre Nosotros
        </a>
        <a className="w-full"  href="#calendly" onClick={handleMenuToggle}>
          Agendar Demo
        </a>
        <button className="w-full" onClick={handleMenuToggle}>
          <AiOutlineClose
            className=""
            style={{ height: "30px", width: "30px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default MenuPhone;
