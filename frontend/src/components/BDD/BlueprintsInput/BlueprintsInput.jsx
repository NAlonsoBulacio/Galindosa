import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import UploadImage from "../../UploadImage/UploadImage";

const BlueprintsInput = ({
  img,
  handleDeleteImage,
  handleChangeVariantImg,
  handleCloseUpload,
  title,
  id,
  isUploadOpen, // Nuevo prop para saber si el componente está abierto
  onToggleUpload, // Nuevo prop para alternar el estado de subir imagen
}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (img) {
      setImages(img);
    }
  }, [img]);


  const handleMoveImageUp = (index) => {
    if (index === 0) return;
    const newImages = [...images];
    [newImages[index - 1], newImages[index]] = [
      newImages[index],
      newImages[index - 1],
    ];

    handleChangeVariantImg(newImages, id);
  };

  const handleMoveImageDown = (index) => {
    if (index === images.length - 1) return;
    const newImages = [...images];
    [newImages[index + 1], newImages[index]] = [
      newImages[index],
      newImages[index + 1],
    ];

    handleChangeVariantImg(newImages, id);
  };

  return (
    <div className="sm:col-span-4">
      <p>
        <span className="font-bold">Imagenes de Planos</span>
      </p>
      <div className="flex flex-wrap">
        {images?.map((img, index) => (
          <div key={index} className="w-24 relative mx-2">
            <img className="w-full" src={img} alt={`Imagen ${index + 1}`} />
            <div
              onClick={() => handleDeleteImage(index, id)}
              className="absolute top-0 right-0 cursor-pointer opacity-70 hover:opacity-100"
            >
              X
            </div>
            <div className="flex justify-center mt-1 space-x-2">
              <button
                onClick={() => handleMoveImageUp(index)}
                disabled={index === 0}
                className={`p-1 border rounded ${index === 0 ? "opacity-50" : "hover:bg-gray-200"}`}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => handleMoveImageDown(index)}
                disabled={index === images.length - 1}
                className={`p-1 border rounded ${
                  index === images.length - 1 ? "opacity-50" : "hover:bg-gray-200"
                }`}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={onToggleUpload} // Cambiamos a la función pasada desde el parent
        className="w-2/5 flex items-center justify-center underline cursor-pointer text-blue-700 mt-4"
      >
        <p className="text-left">Cargar imagen</p>
        <IoIosArrowDown className={`${isUploadOpen ? "rotate-180" : ""} duration-300`} />
      </div>
      {isUploadOpen && (
        <UploadImage
          handleUploadImage={(image) => {
            const updatedImages = [...images, image];
            setImages(updatedImages);
            handleChangeVariantImg(updatedImages, id);
          }}
          id={id}
          handleCloseUpload={handleCloseUpload}
        />
      )}
    </div>
  );
};

export default BlueprintsInput;
