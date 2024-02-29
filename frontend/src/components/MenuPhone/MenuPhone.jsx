import React, {  useEffect } from "react";
import "./MenuPhone.css";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo-g.png";
import { motion, useAnimation } from "framer-motion";
const MenuPhone = ({ menuOpen, handleMenuToggle }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (menuOpen) {
      controls.start("onscreen");
    } else {
      controls.start("offscreen");
    }
  }, [menuOpen, controls]);

  const cardVariants = {
    offscreen: {
      y: -150,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
    up: {
      y: -150,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="lg:hidden menu-phone fixed top-0 right-0 w-full flex justify-start pt-8 items-start font-poppins-400 bg-gray-200"
      variants={cardVariants}
      initial="offscreen"
      animate={menuOpen ? "onscreen" : "up"}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="menu-container w-full flex flex-wrap justify-start items-center px-6 text-gray-700 space-y-[11px]">
        <img className="w-12 h-12" src={logo} alt="" />
        <a className="w-full" href="/" onClick={handleMenuToggle}>
          Inicio
        </a>
        <a className="w-full" href="#process" onClick={handleMenuToggle}>
          Nuestro Proceso
        </a>
        <a className="w-full" href="#about" onClick={handleMenuToggle}>
          Sobre Nosotros
        </a>
        <a className="w-full" href="#calendly" onClick={handleMenuToggle}>
          Agendar Demo
        </a>
        <button className="w-full pt-2" onClick={handleMenuToggle}>
          <AiOutlineClose
            className=""
            style={{ height: "36px", width: "36px" }}
          />
        </button>
      </div>
    </motion.div>
  );
};

export default MenuPhone;
