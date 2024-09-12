import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Importa los íconos de flechas
import UploadImage from "../../UploadImage/UploadImage";
import { amenities } from "../../../utils";

const Section = ({
  index,
  section,
  handleSectionChange,
  handleSectionCheckboxChange,
  handleDeleteSectionImage,
  handleSectionImageChange,
  setCurrentSectionIndex,
  currentSectionIndex,
  handleCloseUpload,
  removeSection,
  detail
}) => {

  const [images, setImages] = useState([]);
  const [uploadImg, setUploadImg] = useState(false);

  useEffect(() => {
    section && section.images && setImages(section.images);
  }, [section.images]);

  const handleMoveImageUp = (imgIndex) => {
    if (imgIndex === 0) return; // No puede mover la primera imagen hacia arriba
    const newImages = [...images];
    [newImages[imgIndex - 1], newImages[imgIndex]] = [newImages[imgIndex], newImages[imgIndex - 1]];
    setImages(newImages);
    handleSectionImageChange(newImages, index); // Actualiza las imágenes en el estado de la sección
  };

  const handleMoveImageDown = (imgIndex) => {
    if (imgIndex === images.length - 1) return; // No puede mover la última imagen hacia abajo
    const newImages = [...images];
    [newImages[imgIndex + 1], newImages[imgIndex]] = [newImages[imgIndex], newImages[imgIndex + 1]];
    setImages(newImages);
    handleSectionImageChange(newImages, index); // Actualiza las imágenes en el estado de la sección
  };

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="mb-4">
        <label
          htmlFor={`sectionTitle-${index}`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Título de la Sección
        </label>
        <input
          type="text"
          name="title"
          id={`sectionTitle-${index}`}
          value={section.title}
          onChange={(e) => handleSectionChange(index, e)}
          className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor={`sectionText-${index}`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Texto de la Sección
        </label>
        <textarea
          name="text"
          id={`sectionText-${index}`}
          value={section.text}
          onChange={(e) => handleSectionChange(index, e)}
          rows="3"
          className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor={`sectionAmenities-${index}`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Amenidades de la Sección
        </label>
        <div className="mt-2 grid grid-cols-2 gap-4">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="flex items-center">
              <input
                type="checkbox"
                name={`sectionAmenities-${index}`}
                value={amenity}
                checked={section?.amenities?.some(a => a.id === amenity.id)}
                onChange={(e) => handleSectionCheckboxChange(index, e, amenity)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                htmlFor={`sectionAmenities-${index}`}
                className="ml-2 block text-sm text-gray-900"
              >
                {amenity.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="block text-sm font-medium leading-6 text-gray-900">
          Imágenes de la Sección
        </p>
        <div className="flex flex-wrap">
          {images
            ? images.map((img, imgIndex) => (
                <div key={imgIndex} className="w-24 relative mx-2">
                  <img className="w-full" src={img} alt={`Sección imagen ${imgIndex}`} />
                  <div
                    onClick={() => handleDeleteSectionImage(index, imgIndex)}
                    className="absolute top-0 right-0 cursor-pointer opacity-70 hover:opacity-100"
                  >
                    X
                  </div>
                  <div className="flex justify-center mt-1 space-x-2">
                    {/* Flecha hacia arriba */}
                    <button
                      onClick={() => handleMoveImageUp(imgIndex)}
                      disabled={imgIndex === 0}
                      className={`p-1 border rounded ${imgIndex === 0 ? "opacity-50" : "hover:bg-gray-200"}`}
                    >
                      <FaArrowUp />
                    </button>
                    {/* Flecha hacia abajo */}
                    <button
                      onClick={() => handleMoveImageDown(imgIndex)}
                      disabled={imgIndex === images.length - 1}
                      className={`p-1 border rounded ${imgIndex === images.length - 1 ? "opacity-50" : "hover:bg-gray-200"}`}
                    >
                      <FaArrowDown />
                    </button>
                  </div>
                </div>
              ))
            : "No hay imágenes."}
        </div>
        <div
          onClick={() => {
            setCurrentSectionIndex(index);
            setUploadImg(!uploadImg);
          }}
          className="w-2/5 flex items-center justify-center underline cursor-pointer text-blue-700 mt-4"
        >
          <p className="text-left">Cargar imagen</p>
          <IoIosArrowDown
            className={`${uploadImg ? "rotate-180" : ""} duration-300`}
          />
        </div>
        {uploadImg && (
          <UploadImage 
            handleUploadImage={(img) => handleSectionImageChange(Array.isArray(img) ? img : [...images, img], index)} // Modificación para manejar el array correctamente
            handleCloseUpload={handleCloseUpload}
          />
        )}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={() => removeSection(index)}
          className="bg-red-600 text-white px-3 py-1 rounded-md"
        >
          Eliminar Sección
        </button>
      </div>
    </div>
  );
};

export default Section;
