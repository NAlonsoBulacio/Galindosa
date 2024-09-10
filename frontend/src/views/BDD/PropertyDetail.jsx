import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emptyDetail, getProjects } from "../../redux/actions";
import axios from "axios";
import { amenities } from "../../utils";
import Section from "../../components/BDD/Section/Section";
import ImgInput from "../../components/BDD/ImgInput/ImgInput";
import BlueprintsInput from "../../components/BDD/BlueprintsInput/BlueprintsInput";
import UploadImage from "../../components/UploadImage/UploadImage";
import { IoIosArrowDown } from "react-icons/io";

const PropertyDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [isChanging, setIsChanging] = useState(false);
  const projectsR = useSelector((state) => state.projects);
  const [uploadImg, setUploadImg] = useState(false);
  const [presentImages, setPresentImages] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(null);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useEffect(() => {
    const filteredProject = projectsR.find((p) => p.slug === slug);
    setProperty(filteredProject);
  }, [slug, projectsR]);

  useEffect(() => {
    if (property && Array.isArray(property.presentImages)) {
      setPresentImages(property.presentImages);
    } else {
      setPresentImages([]);
    }
  }, [property]);

  const handleSaveChanges = () => {
    if (!property) return;
    
    axios
      .put(`https://galindobackend-production.up.railway.app/properties/${property.id}`, property)
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

    // Buscar el amenity correspondiente al id
    if (name === "amenities") {
      const selectedAmenity = amenities.find(
        (amenity) => amenity.id.toString() === value
      );

      setProperty((prevProperty) => ({
        ...prevProperty,
        [name]: checked
          ? [...prevProperty[name], selectedAmenity]
          : prevProperty[name].filter((item) => item.id !== selectedAmenity.id),
      }));
    } else {
      setProperty((prevProperty) => ({
        ...prevProperty,
        [name]: checked
          ? [...prevProperty[name], value]
          : prevProperty[name].filter((item) => item !== value),
      }));
    }
  };

  const handleReturn = () => {
    setIsChanging(false);
  };

  const handleSectionChange = (index, e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => {
      const sections = [...prevProperty.sections];
      sections[index] = {
        ...sections[index],
        [name]: value,
      };
      return { ...prevProperty, sections };
    });
  };

  const handleSectionCheckboxChange = (index, e, value) => {
    const { checked } = e.target;
  
    setProperty((prevProperty) => {
      const sections = [...prevProperty.sections];
      const section = sections[index];
  
      // Si está checkeado, lo agregamos, si no, lo eliminamos basándonos en el amenity.id
      section.amenities = checked
        ? [...new Set([...section.amenities, value])]
        : section.amenities.filter((amenity) => amenity.id !== value.id);
  
      return { ...prevProperty, sections };
    });
  };

  const addSection = () => {
    setProperty((prevProperty) => ({
      ...prevProperty,
      sections: [
        ...prevProperty.sections,
        { title: "", text: "", images: [], amenities: [] },
      ],
    }));
  };

  const removeSection = (index) => {
    setProperty((prevProperty) => ({
      ...prevProperty,
      sections: prevProperty.sections.filter((_, i) => i !== index),
    }));
  };

  const handleSectionImageChange = (img, index) => {
    setProperty((prevProperty) => {
      const sections = [...prevProperty.sections];
      sections[index] = {
        ...sections[index],
        images: [...(sections[index].images || []), img],
      };
      return { ...prevProperty, sections };
    });
  };

  const handleDeleteSectionImage = (sectionIndex, imgIndex) => {
    setProperty((prevProperty) => {
      const sections = [...prevProperty.sections];
      sections[sectionIndex].images = sections[sectionIndex].images.filter(
        (_, i) => i !== imgIndex
      );
      return { ...prevProperty, sections };
    });
  };

  const handleDeleteImage = (index, id) => {
    if (id === 1) {
      setProperty((prevForm) => ({
        ...prevForm,
        presentImages: prevForm.presentImages.filter((_, i) => i !== index),
      }));
      setPresentImages((prevImages) => prevImages.filter((_, i) => i !== index));
    } else if (id === 3) {
      setProperty((prevForm) => ({
        ...prevForm,
        blueprints: prevForm.blueprints.filter((_, i) => i !== index),
      }));
    }
  };

  const handleChangeVariantImg = (image, id) => {
    if (id === 1) {
      setProperty((prevForm) => ({
        ...prevForm,
        presentImages: [...prevForm.presentImages, image],
      }));
      setPresentImages((prevImages) => [...prevImages, image]);
    } else if (id === 3) {
      setProperty((prevForm) => ({
        ...prevForm,
        blueprints: [...prevForm.blueprints, image],
      }));
    } else if (id === 2) {
      setProperty((prevForm) => ({
        ...prevForm,
        img: image,
      }));
    }
  };

  const handleCloseUpload = () => {
    setUploadImg(false);
    setCurrentSectionIndex(null);
  };

  if (!property) {
    return <div>Cargando...</div>;
  }


  return (
    <>
      <div className="px-32 py-10">
        <div className="w-full flex justify-between">
          <a href="/propertytable">{/* Logo or back button */}</a>
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
                <h1 className="w-auto font-semibold">
                  Nombre de la Propiedad:{" "}
                </h1>
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

                {/* Campo de Ambientes */}
            <div className="sm:col-span-4">
              <label
                htmlFor="rooms"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ambientes
              </label>
              <div className="mt-2 grid grid-cols-2 gap-4">
                {[
                  "Monoambiente",
                  "2 ambientes",
                  "3 ambientes",
                  "4 ambientes",
                  "5 ambientes",
                  "Casa",
                ].map((room, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      name="rooms"
                      value={room}
                      onChange={handleCheckboxChange}
                      checked={property.rooms.includes(room)}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="rooms"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      {room}
                    </label>
                  </div>
                ))}
              </div>
            </div>

              <ImgInput
                img={property.img}
                handleDeleteImage={handleDeleteImage}
                handleChangeVariantImg={handleChangeVariantImg}
                title={"Imagen de Presentación"}
                id={2}
              />

              <div class="sm:col-span-3">
                <p>Imagenes</p>
                <div className="flex">
                  {presentImages !== "" ?
                     presentImages?.map((img, index) => (
                        <div key={index} className="w-24 relative">
                          <img className="" src={img} />
                          <div
                            onClick={() => handleDeleteImage(index, 1)}
                            className="absolute top-0 right-0 cursor-pointer opacity-70 hover:opacity-100"
                          >
                            X
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
                <div
                  onClick={() => setUploadImg(!uploadImg)}
                  className="w-2/5 flex items-center justify-center underline cursor-pointer text-blue-700"
                >
                  <p className="text-left">Cargar imagen</p>
                  <IoIosArrowDown
                    className={`${uploadImg ? "rotate-180" : ""} duration-300`}
                  />
                </div>
                {uploadImg ? (
                  <UploadImage
                    handleUploadImage={handleChangeVariantImg}
                    id={1}
                    handleCloseUpload={handleCloseUpload}
                  />
                ) : (
                  ""
                )}
              </div>

              <BlueprintsInput
                img={property.blueprints}
                handleDeleteImage={handleDeleteImage}
                handleChangeVariantImg={handleChangeVariantImg}
                title={"Planos"}
                id={3}
              />

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
              {/* work_percentage */}
              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Progreso de Obra: </h1>
                {isChanging ? (
                  <input
                    type="text"
                    name="workPercentage"
                    id="workPercentage"
                    value={property.workPercentage}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.workPercentage} %</p>
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
              {/* Intro Description */}
              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">
                  Descripción Introductoria:{" "}
                </h1>
                {isChanging ? (
                  <textarea
                    name="introDescription"
                    id="introDescription"
                    onChange={handleChange}
                    value={property.introDescription}
                    rows="3"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.introDescription}</p>
                )}
              </div>
              {/* Video ID */}
              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">
                  ID del Video de YouTube:{" "}
                </h1>
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
              {/* Zone */}
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
              {/* Units Available */}
              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Unidades disponibles: </h1>
                {isChanging ? (
                  <input
                    type="number"
                    name="unitsVailable"
                    id="unitsVailable"
                    value={property.unitsVailable}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.unitsVailable}</p>
                )}
              </div>
              {/* Total Units */}
              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-semibold">Total de unidades: </h1>
                {isChanging ? (
                  <input
                    type="number"
                    name="totalUnits"
                    id="totalUnits"
                    value={property.totalUnits}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.totalUnits}</p>
                )}
              </div>


              {/* Latitude */}
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
              {/* Longitude */}
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
              {/* Address */}
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
              {/* Categories */}
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
                          checked={
                            property.categories
                              ? property.categories.includes(category)
                              : false
                          }
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
              {/* Amenities */}
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
                        checked={
                          property?.amenities?.some(a => a.id === amenity.id)}
                        
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
              {/* Sections */}
              <div className="col-span-full">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Secciones
                </h3>
                {property.sections.map((section, index) => (
                  <Section
                    key={index}
                    index={index}  
                    section={section}
                    handleSectionChange={handleSectionChange}
                    handleSectionCheckboxChange={handleSectionCheckboxChange}
                    handleDeleteSectionImage={handleDeleteSectionImage}
                    handleSectionImageChange={handleSectionImageChange}
                    setCurrentSectionIndex={() => {}} 
                    currentSectionIndex={null} 
                    handleCloseUpload={() => {}} 
                    removeSection={removeSection}
                  />
                ))}
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={addSection}
                    className="bg-blue-600 text-white px-3 py-2 rounded-md"
                  >
                    Añadir Sección
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PropertyDetail;
