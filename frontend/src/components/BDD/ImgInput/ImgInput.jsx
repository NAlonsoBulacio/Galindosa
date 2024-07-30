import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import UploadImage from "../../UploadImage/UploadImage";
const ImgInput = ({
  img,
  handleDeleteImage,
  handleChangeVariantImg,
  handleCloseUpload,
  title,
  id,
}) => {
  const [images, setImages] = useState("");
  const [uploadImg, setUploadImg] = useState(false);
  useEffect(() => {
    img && setImages(img);
  }, [img]);

  return (
    <div class="sm:col-span-3">
      <p>{title}</p>
      <div className="flex">
        {images ? (
          <div className="w-24 relative">
            <img className="" src={images} />
            <div
              onClick={() => handleDeleteImage(1, 1)}
              className="absolute top-0 right-0 cursor-pointer opacity-70 hover:opacity-100"
            >
              X
            </div>
          </div>
        ) : (
          ""
        )}
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
          id={id}
          handleCloseUpload={handleCloseUpload}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ImgInput;
