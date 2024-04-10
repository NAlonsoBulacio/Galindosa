import React, { useState } from "react";
import logo from "../../assets/logo.png";
import email from "../../assets/email.svg";
import person from "../../assets/person.svg";
import phone from "../../assets/phone.svg";
import "./Registro.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
const Registro = ({ actualizarEstado, handleShowForm }) => {
  const [registro, setRegistro] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const serviceId = "service_tf4fz5e";
  const templateId = "template_e39xq6o";
  const apiKey = "Ukt44gaahould7x-y";

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistro((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
    validate({ ...registro, [name]: value });
  };

  const validate = (registro) => {
    let errors = {};
    if (!registro.name) {
      errors.name = "Llenar con su nombre";
    }
    if (!registro.email) {
      errors.email = "Debes ingresar un email.";
    }
    if (registro.email) {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailRegex.test(registro.email)) {
        errors.email = "El email ingresado no es válido";
      }
    }
    if (!registro.phone) {
      errors.phone = "Debe ingresar su numero de celular.";
    }
    setErrors(errors);
  };

  const handleClick = (click) => {
    handleShowForm(click);
  };

  const handleSubmit = (e) => {
    setFormSubmitted(true);
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      emailjs.send(serviceId, templateId, registro, apiKey).then(
        (response) => {
          window.fbq("trackCustom", "FormSubmited");
          console.log("Correo electrónico enviado con éxito", response);
        },
        (error) => {
          console.error("Error al enviar el correo electrónico", error);
        }
      );
      setRegistro({
        name: "",
        email: "",
        phone: "",
      });
      actualizarEstado(true);
      handleShowForm(false);
    }
  };

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
  };
  return (
    <motion.div
      className="max-w-[1100px] flex items-center justify-center"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <div className="max-w-[700px] p-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[700px] relative">
        <button
          className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded absolute top-2 right-0 mt-2 mr-2"
          onClick={() => handleClick(false)}
        >
          X
        </button>
        <div className="flex justify-center mb-2">
          <img src={logo} alt="Logo" className="w-30 h-20 p-0" />
        </div>
        <h1 className="font-catamaran text-lg md:text-2xl font-semibold text-center text-gray-900 mt-4 mb-12">
          INGRESA TUS DATOS PARA RECIBIR ACCESO
        </h1>

        <form className="max-w-[400px] sm:max-w-[700px] mx-auto">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={registro.name}
              onChange={handleChange}
              placeholder="Ingresa tu Nombre y Apellido"
              className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
              style={{
                backgroundImage: `url(${person})`,
                backgroundSize: "25px 25px",
                backgroundPosition: "5px center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {formSubmitted && errors.name && (
              <span className="text-red-500">{errors.name}</span>
            )}
          </div>
          <div className="mb-4">
            <div className="flex max-h-[54px] ">
              <input
                type="text"
                id="phone"
                name="phone"
                value={registro.phone}
                onChange={handleChange}
                className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Tu número de teléfono..."
                required
                style={{
                  backgroundImage: `url(${phone})`,
                  backgroundSize: "25px 25px",
                  backgroundPosition: "5px center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            {formSubmitted && errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={registro.email}
              onChange={handleChange}
              placeholder="Ingresá tu Correo electrónico"
              className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
              style={{
                backgroundImage: `url(${email})`,
                backgroundSize: "25px 25px",
                backgroundPosition: "5px center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {formSubmitted && errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="flex items-center justify-center mt-12">
            <button
              type="submit"
              onClick={handleSubmit}
              className="button h-[54px] font-plus-400 w-2/3 sm:w-48 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-2 rounded-xl mx-auto block text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2 hover:opacity-80"
            >
              Ingresar mis datos
            </button>
          </div>
        </form>
        <div className="text-center"></div>
        <p className="text-xs text-gray-600 text-center mt-8">
          &copy; 2024 Galindo S A
        </p>
      </div>
    </motion.div>
  );
};

export default Registro;
