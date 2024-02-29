import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const ProjectGallery = () => {
  const [showNav, setShowNav] = useState(false);
  const images = [
    {
      original:
        "https://res.cloudinary.com/doczyujqf/image/upload/c_scale,h_600,w_1000/v1701867160/Zuch%20Properties/Propiedades/The%20Boat/Exterior_V3.RGB_color_fvpanj.webp",
      thumbnail:
        "https://res.cloudinary.com/doczyujqf/image/upload/c_scale,h_150,w_150/v1701867160/Zuch%20Properties/Propiedades/The%20Boat/Exterior_V3.RGB_color_fvpanj.webp",
    },
    {
      original:
        "https://res.cloudinary.com/doczyujqf/image/upload/c_scale,h_600,w_1000/v1701694749/Zuch%20Properties/Propiedades/Bahia%20Tankah/FINAL_DEPA_2DO_PISO_LATERAL_3_vr3ng8.jpg",
      thumbnail:
        "https://res.cloudinary.com/doczyujqf/image/upload/c_scale,h_150,w_150/v1701694749/Zuch%20Properties/Propiedades/Bahia%20Tankah/FINAL_DEPA_2DO_PISO_LATERAL_3_vr3ng8.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/doczyujqf/image/upload/c_scale,h_600,w_1000/v1701694715/Zuch%20Properties/Propiedades/Bahia%20Tankah/FINALES_FRONTAL_nt2sda.webp",
      thumbnail:
        "https://res.cloudinary.com/doczyujqf/image/upload/c_scale,h_150,w_150/v1701694715/Zuch%20Properties/Propiedades/Bahia%20Tankah/FINALES_FRONTAL_nt2sda.webp",
    },
  ];

  const handleFullScreen = () => {
    const gallery = document.querySelector('.image-gallery-fullscreen-button');
    gallery.click(); 
  };

  return (
    <div className="w-full">
      <div
        onMouseOver={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
        className="hidden lg:block w-full rounded-lg overflow-hidden cursor-pointer"
        // onClick={handleFullScreen}
      >
        <ImageGallery
          items={images}
          showThumbnails={true}
          showPlayButton={false}
          showNav={showNav}
        />
      </div>
      <div
        onMouseOver={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
        className="lg:hidden w-full rounded-lg overflow-hidden cursor-pointer"
        onClick={handleFullScreen}
      >
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showNav={showNav}
        />
      </div>
    </div>
  );
};

export default ProjectGallery;
