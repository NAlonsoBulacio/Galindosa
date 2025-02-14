"use client"

import { useState } from "react"
import { TbHomeSearch } from "react-icons/tb"
const FilterProjects = () => {
  const [estado, setEstado] = useState("")
  const [zona, setZona] = useState("")
  const [ambientes, setAmbientes] = useState("")

  const handleEstadoChange = (e) => {
    setEstado(e.target.value)
  }

  const handleZonaChange = (e) => {
    setZona(e.target.value)
  }
  const handleAmbientesChange = (e) => {
    setAmbientes(e.target.value)
  }

  const handleSearch = () => {
    console.log("Filtrar por:", { estado, zona, ambientes })
  }

  return (
    <div className="filter-container p-6 rounded-3xl mx-auto mt-8 max-w-4xl relative">
      <div className="flex items-center justify-start bg-white w-48 rounded-t-3xl gap-x-2 px-3 py-2">
        <TbHomeSearch className="text-2xl font-semibold " />
        <h2 className="text-2xl poppins-regular">Buscador</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end bg-white rounded-r-3xl rounded-b-3xl py-3 px-6">
        <div className="col-span-1">
          <label className="block text-gray-700 mb-2 text-xl">Estado</label>
          <select
            value={estado}
            onChange={handleEstadoChange}
            className="select-custom w-full text-xl  border-b-2 border-gray-300 focus:outline-none focus:border-yellow-600"
          >
            <option value="">Seleccione Estado</option>
            <option value="Terminado">Terminado</option>
            <option value="En Obra">En Obra</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-gray-700 mb-2 text-xl">Zona</label>
          <select
            value={zona}
            onChange={handleZonaChange}
            className="select-custom w-full text-xl border-b-2 border-gray-300 focus:outline-none focus:border-yellow-600"
          >
            <option value="">Seleccione Zona</option>
            <option value="Barrio Norte">Barrio Norte</option>
            <option value="Barrio Sur">Barrio Sur</option>
            <option value="Yerba Buena">Yerba Buena</option>
            <option value="Mate de Luna">Mate de Luna</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-gray-700 mb-2 text-xl">Ambientes</label>
          <select
            value={ambientes}
            onChange={handleAmbientesChange}
            className="select-custom w-full text-xl border-b-2 border-gray-300 focus:outline-none focus:border-yellow-600"
          >
            <option value="">Seleccione Zona</option>
            <option value="Monoambiente">Monoambiente</option>
            <option value="1 Dormitorio">1 Dormitorio</option>
            <option value="2 Dormitorios">2 Dormitorios</option>
            <option value="3 Dormitorios">3 Dormitorios</option>
            <option value="4 Dormitorios">4 Dormitorios</option>
            <option value="5 Dormitorios">5 Dormitorios</option>
            <option value="Casa">Casa</option>
          </select>
        </div>
        <div className="col-span-3 w-full flex justify-end">
          <button
            onClick={handleSearch}
            className="bg-[#fbcc00] text-white p-2 rounded-full w-full md:w-auto md:px-6 hover:bg-[#a18c2d] transition duration-300"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterProjects

