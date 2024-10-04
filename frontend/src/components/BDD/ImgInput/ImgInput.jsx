import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import UploadImage from "../../UploadImage/UploadImage";
import thumbnailConvert from "../../../utils/convertThumbnail";
const ImgInput = ({
  img,
  handleDeleteImage,
  handleChangeVariantImg,
  handleCloseUpload,
  title,
  id,
  isUploadOpen,  // Prop para controlar si el componente de carga está abierto
  onToggleUpload // Función para alternar el estado de apertura del upload
}) => {
  const [images, setImages] = useState("");

  useEffect(() => {
    img && setImages(img);
  }, [img]);

  return (
    <div className="sm:col-span-3">
      <p className="font-bold">{title}</p>
      <div className="flex">
        {images ? (
          <div className="w-24 relative">
            <img className="" src={thumbnailConvert(images)} alt="Presentación" />
            <div
              onClick={() => handleDeleteImage(1, id)}
              className="absolute top-0 right-0 cursor-pointer opacity-70 hover:opacity-100"
            >
              X
            </div>
          </div>
        ) : (
          <p className="italic text-sm text-gray-500">No hay imagen cargada</p>
        )}
      </div>
      <div
        onClick={onToggleUpload} // Usa la función para abrir/cerrar el componente de upload
        className="w-2/5 flex items-center justify-center underline cursor-pointer text-blue-700"
      >
        <p className="text-left">Cargar imagen</p>
        <IoIosArrowDown
          className={`${isUploadOpen ? "rotate-180" : ""} duration-300`}
        />
      </div>
      {isUploadOpen && (
        <UploadImage
          handleUploadImage={handleChangeVariantImg}
          id={id}
          handleCloseUpload={handleCloseUpload}
        />
      )}
    </div>
  );
};

export default ImgInput;
