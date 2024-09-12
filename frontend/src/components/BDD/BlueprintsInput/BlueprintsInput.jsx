import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import UploadImage from "../../UploadImage/UploadImage";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const BlueprintsInput = ({
  img,
  handleDeleteImage,
  handleChangeVariantImg,
  handleCloseUpload,
  title,
  id,
}) => {
  const [images, setImages] = useState([]);  // Corregimos inicialización de imágenes
  const [uploadImg, setUploadImg] = useState(false);  // Declaramos uploadImg y setUploadImg

  useEffect(() => {
    if (img) {
      setImages(img); // Inicializamos el estado con las imágenes recibidas
    }
  }, [img]);

  const handleMoveImageUp = (index) => {
    if (index === 0) return; // No mover si ya es la primera
    const newImages = [...images];
    [newImages[index - 1], newImages[index]] = [newImages[index], newImages[index - 1]];
    
   // Actualiza el estado local
    handleChangeVariantImg(newImages, id); // Propaga los cambios hacia arriba
  };
  
  const handleMoveImageDown = (index) => {
    if (index === images.length - 1) return; // No mover si ya es la última
    const newImages = [...images];
    [newImages[index + 1], newImages[index]] = [newImages[index], newImages[index + 1]];
    
     // Actualiza el estado local
    handleChangeVariantImg(newImages, id); // Propaga los cambios hacia arriba
  };
console.log(img);

  return (
    <div className="sm:col-span-3">
      <p>{title}</p>
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
              {/* Flecha hacia arriba */}
              <button
                onClick={() => handleMoveImageUp(index)}
                disabled={index === 0}
                className={`p-1 border rounded ${index === 0 ? "opacity-50" : "hover:bg-gray-200"}`}
              >
                <FaArrowUp />
              </button>
              {/* Flecha hacia abajo */}
              <button
                onClick={() => handleMoveImageDown(index)}
                disabled={index === images.length - 1}
                className={`p-1 border rounded ${index === images.length - 1 ? "opacity-50" : "hover:bg-gray-200"}`}
              >
                <FaArrowDown />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => setUploadImg(!uploadImg)}  // Toggle para mostrar/ocultar la carga de imagen
        className="w-2/5 flex items-center justify-center underline cursor-pointer text-blue-700 mt-4"
      >
        <p className="text-left">Cargar imagen</p>
        <IoIosArrowDown
          className={`${uploadImg ? "rotate-180" : ""} duration-300`}
        />
      </div>
      {uploadImg && (
        <UploadImage
          handleUploadImage={(image) => {
            const updatedImages = [...images, image];
            setImages(updatedImages);
            handleChangeVariantImg(updatedImages, id); // Actualiza en el parent
          }}
          id={id}
          handleCloseUpload={handleCloseUpload}
        />
      )}
    </div>
  );
};

export default BlueprintsInput;
