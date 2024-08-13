import React, { useState } from "react";
import { logo } from "../../../assets";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",

    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Form data:", formData);
  };

  return (
    <div className="form-container w-[400px] lg:w-[1300px] p-3 rounded-3xl shadow-lg mx-auto mt-8 max-w-lg relative ">
      <div className="flex items-center justify-between bg-white w-1/2 rounded-t-3xl gap-x-2 px-6 py-2">
        <img src={logo} alt="Logo" className="w-32 " />
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 bg-white rounded-b-3xl rounded-r-3xl py-6 px-6"
      >
        <input
          type="text"
          name="nombre"
          placeholder="*Nombre y Apellido"
          value={formData.nombre}
          onChange={handleChange}
          className="p-4 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          type="email"
          name="email"
          placeholder="*Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="tel"
          name="telefono"
          placeholder="*Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          className="p-4 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <textarea
          name="mensaje"
          placeholder=""
          value={formData.mensaje}
          onChange={handleChange}
          className="p-4 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        ></textarea>
        <p className="text-sm text-gray-500">* Campos obligatorios</p>
        <button
          type="submit"
          className="bg-[#ffc702] text-white p-4 rounded-3xl w-full poppins-regular"
        >
          Quiero recibir información
        </button>
      </form>
    </div>
  );
};

export default ContactForm;