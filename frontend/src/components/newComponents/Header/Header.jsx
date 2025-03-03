import { useState, useEffect } from "react"
import { logo, logo_b } from "../../../assets"
import { HiMenuAlt2 } from "react-icons/hi"
import { useLocation } from "react-router-dom"
import { FaRegBuilding } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { IoIosContacts } from "react-icons/io"
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname
  const [currentPage, setCurrentPage] = useState(currentPath)

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setMenuOpen(false) // Close menu on nav click
  }

  const handleScroll = () => {
    const scrollY = window.scrollY
    setNavbar(scrollY >= 80)
  }

  useEffect(() => {
    setCurrentPage(currentPath)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [currentPath])

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <header
        className={`${
          navbar ? "header-bg lg:shadow-2xl h-[80px] lg:h-[80px]" : "header h-[80px] lg:h-[95px]"
        } text-gray-300 p-4 z-[50] font-lato-300 fixed w-full top-0 transition-all duration-500  ${
          menuOpen ? "" : "border-b-[1px] border-gray-900"
        }`}
      >
        <div className="mx-auto flex items-center justify-between lg:hidden z-30 ">
          <div className="logo flex items-center space-x-4">
            <a href="/">
              <img src={navbar ? logo_b : logo_b} alt="Logo" style={{ width: "136px" }} />
            </a>
          </div>
          <HiMenuAlt2
            onClick={handleMenuToggle}
            className={` ${
              menuOpen ? "rotate-180" : ""
            } duration-700 text-gray-50 text-4xl inline-block md:hidden cursor-pointer `}
          />
        </div>
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
                className={`${currentPage === "/" ? "active" : "a-h"} ${navbar ? "text-gray-700" : ""}`}
              >
                Inicio
              </a>
              <a
                href="/edificios"
                onClick={() => handleNavClick("/edificios")}
                className={`${currentPage === "/edificios" ? "active" : "a-h"} ${navbar ? "text-gray-700" : ""}`}
              >
                Edificios
              </a>
              <a
                href="/sobre-nosotros"
                onClick={() => handleNavClick("/sobre-nosotros")}
                className={`${currentPage === "/sobre-nosotros" ? "active" : "a-h"} ${navbar ? "text-gray-700" : ""}`}
              >
                Nuestra Empresa
              </a>
              <a
                href="/contacto"
                onClick={() => handleNavClick("/contacto")}
                className={`${currentPage === "/contacto" ? "active" : "a-h"} ${navbar ? "text-gray-700" : ""}`}
              >
                Contacto
              </a>

              <a
                href="/novedades"
                onClick={() => handleNavClick("/novedades")}
                className={`${currentPage === "/novedades" ? "active" : "a-h"} ${navbar ? "text-gray-700" : ""}`}
              >
                News
              </a>
            </div>
          </nav>
          <div
            className={`${
              navbar ? "text-gray-700 border-gray-700" : ""
            } flex items-center border-[1px] hover:border-[#ffc702] hover:text-[#ffc702] duration-300 px-3 py-1 rounded-full`}
          >
            <a href="/propiedades" className=" flex items-center gap-x-2 poppins-regular">
              Ver todas las propiedades <FaRegBuilding />
            </a>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -340 }}
            animate={{ y: 0 }}
            exit={{ y: -340 }}
            transition={{ duration: 0.7 }}
            className="fixed top-0 left-0 text-left w-full h-96 px-4 mt-10 bg-gray-900 text-white poppins-semibold z-40 flex flex-col items-start justify-center space-y-4"
          >
            <a href="/" onClick={() => handleNavClick("/")} className="text-lg">
              Inicio
            </a>
            <a href="/edificios" onClick={() => handleNavClick("/edificios")} className="text-lg">
              Edificios
            </a>
            <a href="/sobre-nosotros" onClick={() => handleNavClick("/sobre-nosotros")} className="text-lg">
              Nuestra Empresa
            </a>
            <a href="/contacto" onClick={() => handleNavClick("/contacto")} className="text-lg">
              Contacto
            </a>

            <a href="/novedades" onClick={() => handleNavClick("/novedades")} className="text-lg">
              News
            </a>
            <div>
              <a
                href="/"
                className="tracking-widest poppins-regular bg-[#ffc702] hover:bg-[#a18c2d] duration-300 text-white px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 "
              >
                SOLICITAR ASESOR <IoIosContacts className="text-3xl" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header

