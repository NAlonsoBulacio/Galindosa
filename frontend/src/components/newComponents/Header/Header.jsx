import React, { useState, useEffect } from "react";
import { logo, logo_b } from "../../../assets";
import { HiMenuAlt2 } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [currentPage, setCurrentPage] = useState(currentPath);

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setNavbar(scrollY >= 80);
  };

  useEffect(() => {
    setCurrentPage(currentPath);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header
        className={`${
          navbar ? "header-bg shadow-2xl" : "header"
        } text-gray-300 p-4 z-40 font-lato-300 fixed w-full top-0 transition-all duration-500`}
        style={{ height: navbar ? "80px" : "95px" }}
      >
        {!menuOpen ? (
          <div
            className="mx-auto flex items-center justify-between lg:hidden py-10"
            style={{ maxWidth: "1150px", height: "70px" }}
          >
            <div className="logo flex items-center space-x-4">
              <a href="/">
                <img
                  src={navbar ? logo_b : logo}
                  alt="Logo"
                  style={{ height: "87px", width: "87px" }}
                />
              </a>
            </div>
            <HiMenuAlt2
              onClick={handleMenuToggle}
              className="text-4xl inline-block md:hidden cursor-pointer w-10 h-10 absolute top-8 right-10"
            />
          </div>
        ) : (
          ""
        )}
        <div
          className="mx-auto flex items-center justify-between hidden lg:flex poppins-light"
          style={{ maxWidth: "1150px", height: navbar ? "50px" : "70px" }}
        >
          <div className="logo flex items-center space-x-4">
            <a href="/">
              <img
                src={navbar ? logo : logo_b}
                alt="Logo"
                style={{
                  height: navbar ? "50px" : "70px",
                }}
              />
            </a>
          </div>
          <nav className="flex-grow flex justify-center">
            <div className="text-md poppins-semibold space-x-10">
              <a
                href="/"
                onClick={() => handleNavClick("/")}
                className={`${currentPage === "/" ? "active" : "a-h"} ${
                  navbar ? "text-gray-700" : ""
                }`}
              >
                Inicio
              </a>
              <a
                href="/sobre-nosotros"
                onClick={() => handleNavClick("/sobre-nosotros")}
                className={`${currentPage === "/sobre-nosotros" ? "active" : "a-h"} ${
                  navbar ? "text-gray-700" : ""
                }`}
              >
                Nuestra Empresa
              </a>
              <a
                href="/contacto"
                onClick={() => handleNavClick("/contacto")}
                className={`${currentPage === "/contacto" ? "active" : "a-h"} ${
                  navbar ? "text-gray-700" : ""
                }`}
              >
                Contacto
              </a>
              <a
                href="/proyectos"
                onClick={() => handleNavClick("/proyectos")}
                className={`${currentPage === "/proyectos" ? "active" : "a-h"} ${
                  navbar ? "text-gray-700" : ""
                }`}
              >
                Proyectos
              </a>
              <a
                href="/novedades"
                onClick={() => handleNavClick("/novedades")}
                className={`${currentPage === "/novedades" ? "active" : "a-h"} ${
                  navbar ? "text-gray-700" : ""
                }`}
              >
                News
              </a>
            </div>
          </nav>
          <div
            className={`${
              navbar ? "text-gray-700 border-gray-700" : ""
            } flex items-center border-[1px] hover:border-[#f5a623] hover:text-[#f5a623] duration-300 px-3 py-1 rounded-full`}
          >
            <a href="/propiedades" className=" flex items-center gap-x-2 poppins-regular">
              Ver todas las propiedades <FaRegBuilding />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
