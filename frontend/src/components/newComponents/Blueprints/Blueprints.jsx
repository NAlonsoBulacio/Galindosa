import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
// import SampleNextArrow from "../../utils/SampleNextArrow";
// import SamplePrevArrow from "../../utils/SamplePrevArrow";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

const BlueprintsCarousel = ({ blueprints }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const sliderRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: blueprints.length <= 3 ? blueprints.length : 4,
    slidesToScroll: 1,
    dots: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleFullScreen = () => {
    if (!isFullscreen) {
      if (sliderRef.current.requestFullscreen) {
        sliderRef.current.requestFullscreen();
      } else if (sliderRef.current.mozRequestFullScreen) {
        sliderRef.current.mozRequestFullScreen();
      } else if (sliderRef.current.webkitRequestFullscreen) {
        sliderRef.current.webkitRequestFullscreen();
      } else if (sliderRef.current.msRequestFullscreen) {
        sliderRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("msfullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="w-full pb-6 lg:pb-4 mb-8 space-y-10 py-8 lg:px-32">
      <h1 className="text-left text-2xl lg:text-3xl poppins-regular text-gray-700">
        Planos del proyecto
      </h1>
      <Slider ref={sliderRef} {...settings}>
        {blueprints.map((print, index) => (
          <div key={index} className="px-2">
            <img
              src={print}
              alt="print"
              className="hover:shadow-xl duration-300 cursor-pointer"
              onClick={() => openModal(print)}
            />
          </div>
        ))}
      </Slider>
      <button
        onClick={toggleFullScreen}
        className="bg-gray-500 bg-opacity-30 hover:bg-opacity-75 rounded-lg p-2 mt-4"
      >
        {isFullscreen ? (
          <MdFullscreenExit className="text-white text-2xl" />
        ) : (
          <MdFullscreen className="text-white text-2xl" />
        )}
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Blueprint Image"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl"
          >
            &times;
          </button>
          <img src={modalImage} alt="print" className="max-h-screen" />
        </div>
      </Modal>
    </div>
  );
};

export default BlueprintsCarousel;
