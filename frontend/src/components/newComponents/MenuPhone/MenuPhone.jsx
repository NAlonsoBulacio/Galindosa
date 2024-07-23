import React from "react";
import "./MenuPhone.css";
import { motion } from "framer-motion";
const MenuPhone = ({ menuOpen, handleMenuToggle }) => {
  return (
    <div
      className="menu-phone font-poppins-400"
    >
      <a href="/">
        Quiénes Somos
      </a>
      <a href="/">
        Servicios
      </a>
      <a href="/">
        Portfolio
      </a>
      <a href="/">
        Novedades
      </a>
      <a href="/">
        Contacto
      </a>
    </div>
  );
};

export default MenuPhone;
