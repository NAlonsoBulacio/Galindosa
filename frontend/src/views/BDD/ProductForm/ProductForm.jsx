import React, { useState } from "react";
import axios from "axios";
import UploadImage from "../../../components/UploadImage/UploadImage";
import { IoIosArrowDown } from "react-icons/io";
import Section from "../../../components/BDD/Section/Section";
import { amenities, ambients } from "../../../utils";
import ImgInput from "../../../components/BDD/ImgInput/ImgInput";
import BlueprintsInput from "../../../components/BDD/BlueprintsInput/BlueprintsInput";

const ProductForm = () => {
  const [uploadImg, setUploadImg] = useState(false);
  const [images, setImages] = useState([]);
  const [blueprintsImages, setBlueprintsImages] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(null);

  const [activeUploadComponent, setActiveUploadComponent] = useState(null);

  const [form, setForm] = useState({
    name: "",
    present_images: [],
    blueprints: [],
    categories: [],
    img: "",
    surface: "",
    description: "",
    intro_description: "",
    init_date: "",
    finished_date: "",
    units_available: 0,
    total_units: 0,
    latitude: "",
    longitude: "",
    address: "",
    status: "",
    rooms: [],
    amenities: [],
    sections: [],
    zone: "",
    video: "",
    work_percentage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleUploadToggle = (componentId) => {
    setActiveUploadComponent((prevComponent) =>
      prevComponent === componentId ? null : componentId
    );
  };

  const handleCheckboxAmenitiesChange = (e, value) => {
    const { name, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: checked
        ? [...prevForm[name], value]
        : prevForm[name].filter((item) => item !== value),
    }));
  };

  const handleCheckboxAmbientsChange = (e, value) => {
    const { name, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: checked
        ? [...prevForm[name], value]
        : prevForm[name].filter((item) => item !== value),
    }));
  };
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: checked
        ? [...prevForm[name], value]
        : prevForm[name].filter((item) => item !== value),
    }));
  };

  const handleSectionCheckboxChange = (index, e, value) => {
    const { checked } = e.target;
    setForm((prevForm) => {
      const sections = [...prevForm.sections];
      const section = sections[index];
      section.amenities = checked
        ? [...new Set([...section.amenities, value])]
        : section.amenities.filter((amenity) => amenity.id !== value.id);
      return { ...prevForm, sections };
    });
  };

  const handleChangeVariantImg = (image, id) => {
    if (id === 1) {
      setForm((prevForm) => ({
        ...prevForm,
        present_images: [...prevForm.present_images, image],
      }));
      setImages((prevImages) => [...prevImages, image]);
    } else if (id === 3) {
      setForm((prevForm) => ({
        ...prevForm,
        blueprints: [...prevForm.blueprints, image],
      }));
      setBlueprintsImages((prevImages) => [...prevImages, image]);
    } else if (id === 2) {
      console.log(image);
      setForm((prevForm) => ({
        ...prevForm,
        img: image,
      }));
    }
  };

  const handleDeleteImage = (index, id) => {
    if (id === 1) {
      setForm((prevForm) => ({
        ...prevForm,
        present_images: prevForm.present_images.filter((_, i) => i !== index),
      }));
      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    } else if (id === 3) {
      setForm((prevForm) => ({
        ...prevForm,
        blueprints: prevForm.blueprints.filter((_, i) => i !== index),
      }));
      setBlueprintsImages((prevImages) =>
        prevImages.filter((_, i) => i !== index)
      );
    }
  };

  const handleSectionChange = (index, e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      const sections = [...prevForm.sections];
      sections[index] = {
        ...sections[index],
        [name]: value,
      };
      return { ...prevForm, sections };
    });
  };

  const handleSectionImageChange = (img, index) => {
    setForm((prevForm) => {
      const sections = [...prevForm.sections];
      sections[index] = {
        ...sections[index],
        images: [...(sections[index].images || []), img],
      };
      return { ...prevForm, sections };
    });
  };

  const handleDeleteSectionImage = (sectionIndex, imgIndex) => {
    setForm((prevForm) => {
      const sections = [...prevForm.sections];
      sections[sectionIndex].images = sections[sectionIndex].images.filter(
        (_, i) => i !== imgIndex
      );
      return { ...prevForm, sections };
    });
  };

  const addSection = () => {
    setForm((prevForm) => ({
      ...prevForm,
      sections: [
        ...prevForm.sections,
        { title: "", text: "", images: [], amenities: [] },
      ],
    }));
  };

  const removeSection = (index) => {
    setForm((prevForm) => ({
      ...prevForm,
      sections: prevForm.sections.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://galindobackend-production.up.railway.app/properties",
        [form]
      );

      if (response.status === 200 || response.status === 201) {
        alert("Producto Agregado Exitosamente");
        setForm({
          name: "",
          present_images: [],
          surface: "",
          description: "",
          intro_description: "",
          init_date: "",
          finished_date: "",
          units_available: 0,
          total_units: 0,
          latitude: "",
          longitude: "",
          address: "",
          status: "",
          rooms: "",
          amenities: [],
          sections: [],
          zone: "",
          video: "",
        });
        window.location.href = "https://galindosa.vercel.app/";
      } else {
        console.error("Error al agregar el producto.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  // const handleCloseUpload = () => {
  //   setUploadImg(false);
  //   setCurrentSectionIndex(null);
  // };

  const handleCloseUpload = () => {
    setActiveUploadComponent(null); // Cierra el componente activo
  };

  return (
    <form
      className="px-4 md:px-8 max-w-3xl mx-auto py-12"
      onSubmit={handleSubmit}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Nueva Propiedad
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Esta información va a ser publica, porfavor revisar bien las
            casillas antes de publicar.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre de la Propiedad
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={form.name}
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="zone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Zona
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <select
                    name="zone"
                    id="zone"
                    onChange={handleChange}
                    value={form.zone}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                  >
                    <option value="">Seleccione una zona</option>
                    <option value="Yerba Buena">Yerba Buena</option>
                    <option value="Barrio Sur">Barrio Sur</option>
                    <option value="Barrio Norte">Barrio Norte</option>
                    <option value="Mate de Luna">Mate de Luna</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Campo de descripción introductoria */}
            <div className="sm:col-span-4">
              <label
                htmlFor="intro_description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Titulo Introductorio
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <textarea
                    name="intro_description"
                    id="intro_description"
                    onChange={handleChange}
                    value={form.intro_description}
                    rows="3"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* Campo de descripción */}
            <div className="sm:col-span-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Descripción
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <textarea
                    name="description"
                    id="description"
                    onChange={handleChange}
                    value={form.description}
                    rows="3"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* Campo de video */}
            <div className="sm:col-span-4">
              <label
                htmlFor="video"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ID del Video de YouTube
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="video"
                    id="video"
                    onChange={handleChange}
                    value={form.video}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* img Inout */}
            <ImgInput
              img={form.img}
              handleDeleteImage={handleDeleteImage}
              handleChangeVariantImg={handleChangeVariantImg}
              title={"Imagen de Presentación"}
              id={2}
              isUploadOpen={activeUploadComponent === "imgInput"}
              onToggleUpload={() => handleUploadToggle("imgInput")}
            />
            {/* Blueprints Input */}
            <BlueprintsInput
              img={form.blueprints}
              handleDeleteImage={handleDeleteImage}
              handleChangeVariantImg={handleChangeVariantImg}
              title={"Planos"}
              id={3}
              isUploadOpen={activeUploadComponent === "blueprints"}
              onToggleUpload={() => handleUploadToggle("blueprints")}
            />

            {/* Carrusel de Imágenes */}
      <div className="sm:col-span-4">
        <p><span className="font-bold">Imágenes del Carrusel</span> - Dimensiones (15 : 10) o (16 : 9)</p>
        <p className="italic text-sm">No más de 3 imágenes</p>
        <div className="flex">
          {images.map((img, index) => (
            <div key={index} className="w-24 relative">
              <img className="" src={img} alt={`imagen-${index}`} />
              <div
                onClick={() => {}}
                className="absolute top-0 right-0 cursor-pointer opacity-70 hover:opacity-100"
              >
                X
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => handleUploadToggle("carouselImages")}
          className="w-2/5 flex items-center justify-center underline cursor-pointer text-blue-700"
        >
          <p className="text-left">Cargar imagen</p>
          <IoIosArrowDown
            className={`${
              activeUploadComponent === "carouselImages" ? "rotate-180" : ""
            } duration-300`}
          />
        </div>
        {activeUploadComponent === "carouselImages" && (
          <UploadImage
            handleUploadImage={(image) => setImages([...images, image])}
            id={1}
            handleCloseUpload={handleCloseUpload}
          />
        )}
      </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="latitude"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Latitud
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="latitude"
                    id="latitude"
                    onChange={handleChange}
                    value={form.latitude}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="longitude"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Longitud
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="longitude"
                    id="longitude"
                    onChange={handleChange}
                    value={form.longitude}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dirección
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={handleChange}
                    value={form.address}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Estado
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <select
                    name="status"
                    id="status"
                    onChange={handleChange}
                    value={form.status}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                  >
                    <option value="">Seleccione un estado</option>
                    <option value="En Obra">En Obra</option>
                    <option value="Terminado">Terminado</option>
                  </select>
                </div>
              </div>
            </div>



            <div className="sm:col-span-4">
              <label
                htmlFor="categories"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Categorías
              </label>
              <div className="mt-2 grid grid-cols-2 gap-4">
                {["Departamento", "Locales Comerciales", "Casa", "Cocheras"].map(
                  (category, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        name="categories"
                        value={category}
                        onChange={handleCheckboxChange}
                        checked={form.categories.includes(category)}
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
                htmlFor="rooms"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ambientes
              </label>
              <div className="mt-2 grid grid-cols-2 gap-4">
                {ambients.map((ambient) => (
                  <div key={ambient.id} className="flex items-center">
                    <input
                      type="checkbox"
                      name="rooms"
                      value={ambient}
                      onChange={(e) =>
                        handleCheckboxAmbientsChange(e, ambient)
                      }
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="rooms"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      {ambient.label}
                    </label>
                  </div>
                ))}
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
                      value={amenity}
                      onChange={(e) =>
                        handleCheckboxAmenitiesChange(e, amenity)
                      }
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

            <div className="col-span-full">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Secciones
              </h3>
              {form.sections.map((section, index) => (
                <Section
                  key={index}
                  index={index}
                  section={section}
                  handleSectionChange={handleSectionChange}
                  handleSectionCheckboxChange={handleSectionCheckboxChange}
                  handleDeleteSectionImage={handleDeleteSectionImage}
                  handleSectionImageChange={handleSectionImageChange}
                  setCurrentSectionIndex={setCurrentSectionIndex}
                  currentSectionIndex={currentSectionIndex}
                  removeSection={removeSection}
                  isUploadOpen={activeUploadComponent === `section-${index}`}
                  onToggleUpload={() => handleUploadToggle(`section-${index}`)}
                  handleCloseUpload={handleCloseUpload}
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
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <a
          href="/producttable"
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancelar
        </a>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
