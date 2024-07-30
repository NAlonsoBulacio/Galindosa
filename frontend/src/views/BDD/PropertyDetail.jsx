import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emptyDetail, getProjects } from "../../redux/actions";
import axios from "axios";
import { amenities } from "../../utils";

const PropertyDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [isChanging, setIsChanging] = useState(false);
  const projectsR = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useEffect(() => {
    const filteredProject = projectsR.find((p) => p.slug === slug);
    setProperty(filteredProject);
  }, [slug, projectsR]);

  const handleSaveChanges = () => {
    axios
      .put(`http://localhost:3001/properties/${property.id}`, property)
      .then((response) => {
        alert("Cambios guardados con éxito");
        setIsChanging(false);
      })
      .catch((error) => {
        console.error("Error al guardar los cambios", error);
        setIsChanging(false);
      });
  };

  const handleChanging = () => {
    setIsChanging(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: checked
        ? [...prevProperty[name], value]
        : prevProperty[name].filter((item) => item !== value),
    }));
  };

  const handleReturn = () => {
    setIsChanging(false);
  };

  return (
    <>
      <div className="px-32 py-10">
        <div className="w-full flex justify-between">
          <a href="/propertytable">
            {/* Logo or back button */}
          </a>
          <div>
            {isChanging ? (
              <button
                className="text-2xl mr-3 bg-blue-500 px-3 py-1 rounded-lg text-gray-200"
                onClick={handleReturn}
              >
                X
              </button>
            ) : (
              ""
            )}
            <button
              onClick={!isChanging ? handleChanging : handleSaveChanges}
              className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
            >
              {!isChanging ? "Realizar Cambios" : "Guardar"}
            </button>
          </div>
        </div>
        {property ? (
          <div className="flex justify-center items-start gap-32 mx-20">
            <div className="flex flex-col gap-2 justify-center">
              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Nombre de la Propiedad: </h1>
                {isChanging ? (
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={property.name}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.name}</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-bold">Estado: </h1>
                {isChanging ? (
                  <select
                    name="status"
                    id="status"
                    onChange={handleChange}
                    value={property.status}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  >
                    <option value="En Pozo">En Pozo</option>
                    <option value="Terminado">Terminado</option>
                  </select>
                ) : (
                  <p className="text-sm">{property.status}</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Superficie: </h1>
                {isChanging ? (
                  <input
                    type="number"
                    name="surface"
                    id="surface"
                    value={property.surface}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.surface} m²</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Descripción: </h1>
                {isChanging ? (
                  <textarea
                    name="description"
                    id="description"
                    onChange={handleChange}
                    value={property.description}
                    rows="3"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.description}</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Descripción Introductoria: </h1>
                {isChanging ? (
                  <textarea
                    name="intro_description"
                    id="intro_description"
                    onChange={handleChange}
                    value={property.intro_description}
                    rows="3"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.intro_description}</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">ID del Video de YouTube: </h1>
                {isChanging ? (
                  <input
                    type="text"
                    name="video"
                    id="video"
                    onChange={handleChange}
                    value={property.video}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.video}</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Zona: </h1>
                {isChanging ? (
                  <select
                    name="zone"
                    id="zone"
                    onChange={handleChange}
                    value={property.zone}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  >
                    <option value="Yerba Buena">Yerba Buena</option>
                    <option value="Barrio Sur">Barrio Sur</option>
                    <option value="Barrio Norte">Barrio Norte</option>
                  </select>
                ) : (
                  <p className="text-sm">{property.zone}</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Unidades disponibles: </h1>
                {isChanging ? (
                  <input
                    type="number"
                    name="units_available"
                    id="units_available"
                    value={property.units_available}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.units_available}</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Total de unidades: </h1>
                {isChanging ? (
                  <input
                    type="number"
                    name="total_units"
                    id="total_units"
                    value={property.total_units}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.total_units}</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Latitud: </h1>
                {isChanging ? (
                  <input
                    type="text"
                    name="latitude"
                    id="latitude"
                    value={property.latitude}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.latitude}</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Longitud: </h1>
                {isChanging ? (
                  <input
                    type="text"
                    name="longitude"
                    id="longitude"
                    value={property.longitude}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.longitude}</p>
                )}
              </div>

              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Dirección: </h1>
                {isChanging ? (
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={property.address}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.address}</p>
                )}
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="categories"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Categorías
                </label>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  {["Departamento", "Locales", "Casa", "Cocheras"].map(
                    (category, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          name="categories"
                          value={category}
                          onChange={handleCheckboxChange}
                          checked={property.categories ? property.categories.includes(category) : false}
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="categories"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          {category}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="amenities"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Amenidades
                </label>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  {amenities.map((amenity) => (
                    <div key={amenity.id} className="flex items-center">
                      <input
                        type="checkbox"
                        name="amenities"
                        value={amenity.id}
                        onChange={handleCheckboxChange}
                        checked={property.amenities ? property.amenities.includes(amenity.id) : false}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="amenities"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        {amenity.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Add any additional sections or images as needed */}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PropertyDetail;
