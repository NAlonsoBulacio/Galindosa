"use client"

import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { logo } from "../../../assets"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })
  
  const [status, setStatus] = useState({
    submitted: false,
    message: ''
  })
  
  const [loading, setLoading] = useState(false)
  const formRef = useRef()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Replace these with your actual EmailJS service, template and user ID
    const serviceId = 'service_tf4fz5e'
    const templateId = 'template_e39xq6o'
    const userId = 'Ukt44gaahould7x-y'
    
    // Send the email using EmailJS
    emailjs.sendForm(serviceId, templateId, formRef.current, userId)
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        setStatus({
          submitted: true,
          message: '¡Gracias! Tu mensaje ha sido enviado correctamente.'
        })
        // Reset form
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          mensaje: "",
        })
        setLoading(false)
      })
      .catch((error) => {
        console.error('Failed to send email:', error)
        setStatus({
          submitted: true,
          message: 'Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.'
        })
        setLoading(false)
      })
  }

  return (
    <div className="form-container w-[400px] lg:w-[1300px] p-3 rounded-3xl shadow-lg mx-auto mt-8 max-w-lg relative">
      <div className="flex items-center justify-between bg-white w-1/2 rounded-t-3xl gap-x-2 px-6 py-2">
        <img src={logo} alt="Logo" className="w-32" />
      </div>
      {status.submitted ? (
        <div className="bg-white rounded-b-3xl rounded-r-3xl py-6 px-6">
          <p className={`text-center p-4 rounded-3xl ${status.message.includes('problema') ? 'text-red-500' : 'text-green-500'}`}>
            {status.message}
          </p>
          <button 
            onClick={() => setStatus({ submitted: false, message: '' })}
            className="bg-[#ffc702] text-white p-4 rounded-3xl w-full mt-4 poppins-regular"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 bg-white rounded-b-3xl rounded-r-3xl py-6 px-6">
          <input
            type="text"
            name="nombre"
            placeholder="*Nombre y Apellido"
            value={formData.nombre}
            onChange={handleChange}
            className="p-4 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="*Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          
          <input
            type="tel"
            name="telefono"
            placeholder="*Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="p-4 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="p-4 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows="4"
          ></textarea>
          
          <p className="text-sm text-gray-500">* Campos obligatorios</p>
          
          <button 
            type="submit" 
            className="bg-[#ffc702] text-white p-4 rounded-3xl w-full poppins-regular"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Quiero recibir información'}
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactForm