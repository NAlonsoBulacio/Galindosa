import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../redux/actions";
import axios from "axios";
import { amenities, ambients } from "../../utils";
import Section from "../../components/BDD/Section/Section";
import ImgInput from "../../components/BDD/ImgInput/ImgInput";
import BlueprintsInput from "../../components/BDD/BlueprintsInput/BlueprintsInput";
import UploadImage from "../../components/UploadImage/UploadImage";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import thumbnailConvert from "../../utils/convertThumbnail";
import ReactQuill from "react-quill"; // Importa react-quill
import "react-quill/dist/quill.snow.css";

const PropertyDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [isChanging, setIsChanging] = useState(false);
  const projectsR = useSelector((state) => state.projects);

  const [activeUploadComponent, setActiveUploadComponent] = useState(null);

  const [uploadImg, setUploadImg] = useState(false);
  const [presentImages, setPresentImages] = useState([]);
  const [localSections, setLocalSections] = useState([]);
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
    if (property && Array.isArray(property.sections)) {
      setLocalSections(property.sections);
    } else {
      setLocalSections([]);
    }
  }, [property]);

  const handleUploadToggle = (componentId) => {
    // Si el mismo componente vuelve a hacer toggle, se cierra. Si es otro, se abre.
    setActiveUploadComponent((prevComponentId) =>
      prevComponentId === componentId ? null : componentId
    );
  };

  const handleSaveChanges = () => {
    if (!property) return;

    axios
      .put(
        `https://galindobackend-production.up.railway.app/properties/${property.id}`,
        property
      )
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
    } else if (name === "rooms") {
      const selectedAmbient = ambients.find(
        (ambient) => ambient.id.toString() === value
      );
      selectedAmbient.available = true; // por defecto disponible

      setProperty((prevProperty) => ({
        ...prevProperty,
        [name]: checked
          ? [...prevProperty[name], selectedAmbient]
          : prevProperty[name].filter((item) => item.id !== selectedAmbient.id),
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

  const handleAvailabilityChange = (e, ambientId) => {
    const { value } = e.target;

    setProperty((prevProperty) => ({
      ...prevProperty,
      rooms: prevProperty.rooms.map((ambient) =>
        ambient.id === ambientId
          ? { ...ambient, available: value === "disponible" }
          : ambient
      ),
    }));
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
        images: Array.isArray(img)
          ? img
          : [...(sections[index].images || []), img],
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
      setPresentImages((prevImages) =>
        prevImages.filter((_, i) => i !== index)
      );
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
        blueprints: Array.isArray(image)
          ? image // Si 'image' es un array, lo reemplaza directamente
          : [...prevForm.blueprints, image], // Si no es un array, lo agrega al array existente
      }));
    } else if (id === 2) {
      setProperty((prevForm) => ({
        ...prevForm,
        img: image,
      }));
    }
  };

  const handleMoveImageUp = (index) => {
    if (index === 0) return; // No puede mover la primera imagen hacia arriba
    const newImages = [...presentImages];
    [newImages[index - 1], newImages[index]] = [
      newImages[index],
      newImages[index - 1],
    ];

    // Actualizar tanto el estado de las imágenes como el objeto property
    setPresentImages(newImages);
    setProperty((prevProperty) => ({
      ...prevProperty,
      presentImages: newImages, // Actualiza el array de imágenes en property
    }));
  };

  const handleMoveImageDown = (index) => {
    if (index === presentImages.length - 1) return; // No puede mover la última imagen hacia abajo
    const newImages = [...presentImages];
    [newImages[index + 1], newImages[index]] = [
      newImages[index],
      newImages[index + 1],
    ];

    // Actualizar tanto el estado de las imágenes como el objeto property
    setPresentImages(newImages);
    setProperty((prevProperty) => ({
      ...prevProperty,
      presentImages: newImages, // Actualiza el array de imágenes en property
    }));
  };
  const handleMoveSectionUp = (index) => {
    if (index === 0) return; // No puede mover la primera section hacia arriba
    const newSections = [...localSections];
    [newSections[index - 1], newSections[index]] = [
      newSections[index],
      newSections[index - 1],
    ];

    // Actualizar tanto el estado de las sections como el objeto property
    setLocalSections(newSections);
    setProperty((prevProperty) => ({
      ...prevProperty,
      sections: newSections, // Actualiza el array de sections en property
    }));
  };

  const handleMoveSectionDown = (index) => {
    if (index === localSections.length - 1) return; // No puede mover la última section hacia abajo
    const newSections = [...localSections];
    [newSections[index + 1], newSections[index]] = [
      newSections[index],
      newSections[index + 1],
    ];

    // Actualizar tanto el estado de las sections como el objeto property
    setLocalSections(newSections);
    setProperty((prevProperty) => ({
      ...prevProperty,
      sections: newSections, // Actualiza el array de sections en property
    }));
  };

  const handleCloseUpload = () => {
    setUploadImg(false);
    setCurrentSectionIndex(null);
  };
  const handleDescriptionChange = (value) => {
    setProperty((prevProperty) => ({
      ...prevProperty,
      description: value,
    }));
  };

  const handleDeleteProperty = () => {
    // Mostrar un cuadro de confirmación
    const confirmDelete = window.confirm(
      "¿Seguro quieres eliminar este proyecto? No podras volver a tener estos datos."
    );

    if (confirmDelete) {
      // Realizar la solicitud DELETE con Axios
      axios
        .delete(
          `https://galindobackend-production.up.railway.app/properties/${property.id}`
        )
        .then((response) => {
          // Manejar la respuesta en caso de éxito
          console.log("Propiedad eliminada:", response.data);
          window.location.href = "https://galindosa.vercel.app/proyectos-bdd";
        })
        .catch((error) => {
          // Manejar errores
          console.error("Error al eliminar la propiedad:", error);
          alert(
            "Hubo un error al intentar eliminar la propiedad. Inténtalo de nuevo."
          );
        });
    }
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
            <div className="flex flex-wrap gap-x-4">
              <button
                onClick={!isChanging ? handleChanging : handleSaveChanges}
                className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
              >
                {!isChanging ? "Realizar Cambios" : "Guardar"}
              </button>
              <button
                onClick={handleDeleteProperty}
                className="px-5 py-2 border-red-600 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
              >
                Borrar Propiedad
              </button>
            </div>
          </div>
        </div>
        {property ? (
          <div className="flex justify-center items-start gap-32 mx-20">
            <div className="flex flex-col gap-10 justify-center">
              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-bold">Nombre de la Propiedad: </h1>
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
                <h1 className="w-auto font-bold">Dirección: </h1>
                {isChanging ? (
                  <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={handleChange}
                    value={property.address}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.address}</p>
                )}
              </div>

              {/* intro description */}
              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-bold">Titulo Introductorio: </h1>
                {isChanging ? (
                  <input
                    type="text"
                    name="introDescription"
                    id="introDescription"
                    onChange={handleChange}
                    value={property.introDescription}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.introDescription}</p>
                )}
              </div>

              {/* Campo de descripción utilizando ReactQuill */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Descripción
                </label>
                <div className="mt-2">
                  <ReactQuill
                    theme="snow"
                    value={property.description}
                    onChange={handleDescriptionChange}
                    className="bg-white" // Clase para estilos
                  />
                </div>
              </div>

              {/* video de youtube */}
              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-bold">ID del Video de YouTube: </h1>
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
                <h1 className="w-auto font-bold">Latitud: </h1>
                {isChanging ? (
                  <input
                    type="text"
                    name="latitude"
                    id="latitude"
                    onChange={handleChange}
                    value={property.latitude}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.latitude}</p>
                )}
              </div>
              <div className="flex justify-start items-center gap-2">
                <h1 className="w-auto font-bold">Longitud: </h1>
                {isChanging ? (
                  <input
                    type="text"
                    name="longitude"
                    id="longitude"
                    onChange={handleChange}
                    value={property.longitude}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg sm:leading-6"
                  />
                ) : (
                  <p className="text-sm">{property.longitude}</p>
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
                    <option value="En Obra">En Obra</option>
                    <option value="Terminado">Terminado</option>
                  </select>
                ) : (
                  <p className="text-sm">{property.status}</p>
                )}
              </div>

              {/* Imagen de presentación */}
              <ImgInput
                img={property.img}
                handleDeleteImage={handleDeleteImage}
                handleChangeVariantImg={handleChangeVariantImg}
                title={"Imagen de Presentación"}
                id={2}
                isUploadOpen={activeUploadComponent === "imgInput"}
                onToggleUpload={() => handleUploadToggle("imgInput")}
              />

              <div className="sm:col-span-3">
                <p className="font-bold">Imagenes</p>
                <div className="flex flex-wrap">
                  {presentImages.map((img, index) => (
                    <div key={index} className="w-24 relative mx-2">
                      <img
                        className="w-full"
                        src={thumbnailConvert(img)}
                        alt={`Imagen ${index + 1}`}
                      />
                      <div
                        onClick={() => handleDeleteImage(index, 1)}
                        className="absolute top-0 right-0 cursor-pointer opacity-70 hover:opacity-100"
                      >
                        X
                      </div>
                      <div className="flex justify-center mt-1 space-x-2">
                        {/* Flecha hacia arriba */}
                        <button
                          onClick={() => handleMoveImageUp(index)}
                          disabled={index === 0}
                          className={`p-1 border rounded ${
                            index === 0 ? "opacity-50" : "hover:bg-gray-200"
                          }`}
                        >
                          <FaArrowLeft />
                        </button>
                        {/* Flecha hacia abajo */}
                        <button
                          onClick={() => handleMoveImageDown(index)}
                          disabled={index === presentImages.length - 1}
                          className={`p-1 border rounded ${
                            index === presentImages.length - 1
                              ? "opacity-50"
                              : "hover:bg-gray-200"
                          }`}
                        >
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  onClick={() => handleUploadToggle("presentImages")} // Aquí activamos el estado de carga específico
                  className="w-2/5 flex items-center justify-center underline cursor-pointer text-blue-700 mt-4"
                >
                  <p className="text-left">Cargar imagen</p>
                  <IoIosArrowDown
                    className={`${
                      activeUploadComponent === "presentImages"
                        ? "rotate-180"
                        : ""
                    } duration-300`}
                  />
                </div>
                {activeUploadComponent === "presentImages" && (
                  <UploadImage
                    handleUploadImage={(image) => {
                      // Actualiza el estado local `presentImages`
                      const updatedImages = [...presentImages, image];
                      setPresentImages(updatedImages);

                      // Actualiza también el estado de `property`
                      setProperty((prevProperty) => ({
                        ...prevProperty,
                        presentImages: updatedImages, // Refleja el cambio en `property`
                      }));
                    }}
                    id={1}
                    handleCloseUpload={handleCloseUpload}
                    handleDeleteImage={handleDeleteImage}
                  />
                )}
              </div>

              <BlueprintsInput
                img={property.blueprints}
                handleDeleteImage={handleDeleteImage}
                handleChangeVariantImg={handleChangeVariantImg}
                title={"Planos"}
                id={3}
                isUploadOpen={activeUploadComponent === "blueprints"} // Pasa si está abierto o no
                onToggleUpload={() => handleUploadToggle("blueprints")}
              />

              {/* Campo de Ambientes */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="rooms"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Ambientes
                </label>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  {ambients.map((ambient) => (
                    <div key={ambient.id} className="flex items-center">
                      <input
                        type="checkbox"
                        name="rooms"
                        value={ambient.id}
                        onChange={handleCheckboxChange}
                        checked={property?.rooms?.some(
                          (a) => a.id === ambient.id
                        )}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="rooms"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        {ambient.label}
                      </label>
                      {/* Agregar el select para cambiar disponibilidad */}
                      <select
                        value={
                          property.rooms.find((room) => room.id === ambient.id)
                            ?.available
                            ? "disponible"
                            : "agotado"
                        }
                        onChange={(e) =>
                          handleAvailabilityChange(e, ambient.id)
                        }
                        className="ml-4 border border-gray-300 rounded-md px-2 py-1"
                      >
                        <option value="disponible">Disponible</option>
                        <option value="agotado">Agotado</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
              {/* Amenities */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="amenities"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                        checked={property?.amenities?.some(
                          (a) => a.id === amenity.id
                        )}
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
                <h3 className="text-lg font-bold leading-6 text-gray-900">
                  Secciones
                </h3>
                {property.sections.map((section, index) => (
                  <div>
                    <div className="flex justify-center mt-1 space-x-2">
                      {/* Flecha hacia arriba */}
                      <button
                        onClick={() => handleMoveSectionUp(index)}
                        disabled={index === 0}
                        className={`p-1 border rounded ${
                          index === 0 ? "opacity-50" : "hover:bg-gray-200"
                        }`}
                      >
                        <FaArrowUp className="" />
                      </button>
                      {/* Flecha hacia abajo */}
                      <button
                        onClick={() => handleMoveSectionDown(index)}
                        disabled={index === localSections.length - 1}
                        className={`p-1 border rounded ${
                          index === localSections.length - 1
                            ? "opacity-50"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        <FaArrowDown />
                      </button>
                    </div>
                    <Section
                      key={index}
                      index={index}
                      section={section}
                      handleSectionChange={handleSectionChange}
                      handleSectionCheckboxChange={handleSectionCheckboxChange}
                      handleDeleteSectionImage={handleDeleteSectionImage}
                      handleSectionImageChange={handleSectionImageChange}
                      isUploadOpen={
                        activeUploadComponent === `section-${index}`
                      }
                      onToggleUpload={() =>
                        handleUploadToggle(`section-${index}`)
                      }
                      handleCloseUpload={() => setActiveUploadComponent(null)}
                      removeSection={removeSection}
                    />
                  </div>
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
