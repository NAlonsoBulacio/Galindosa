import React, { useState } from "react";
import man from "../../assets/man.svg";
import woman from "../../assets/woman.svg";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
const Reviews = () => {
  const [review, setReview] = useState("1");
  const [revieSelected, setReviewSelected] = useState({
    id: "1",
    title:
      "Espectacular! Incomparable con cremas de 600€. Efectividad en 3-4 días.",
    date: "20/01/2022",
    description:
      "El cóctel de serum más crema es espectacular!!!! Incomparable con cremas de 600€, muchísimo mejor y efectivad en 3-4 días.",
    name: "Raul Rodriguez",
  });

  const reviews = [
    {
      id: "1",
      title:
        "Espectacular! Incomparable con cremas de 600€. Efectividad en 3-4 días.",
      date: "20/01/2022",
      description:
        "El cóctel de serum más crema es espectacular!!!! Incomparable con cremas de 600€, muchísimo mejor y efectivad en 3-4 días.",
      name: "Raul Rodriguez",
    },
    {
      id: "2",
      title: "ME ENCANTA! Muy agradecida con cruzarme a Galidno S.A",
      date: "20/09/2012",
      description:
        "El cóctel de serum más crema es espectacular!!!! Incomparable con cremas de 600€, muchísimo mejor y efectivad en 3-4 días.",
      name: "Raul Mendez",
    },
    {
      id: "3",
      title: "Gracias Galindo S.A.",
      date: "20/03/1900",
      description:
        "El cóctel de serum más crema es espectacular!!!! Incomparable con cremas de 600€, muchísimo mejor y efectivad en 3-4 días.",
      name: "Raul Paz",
    },
  ];

  const selectReview = (id) => {
    const selectedReview = reviews.find((review) => review.id === id);
    setReviewSelected(selectedReview);
    setReview(id);
  };
  const changeNextReview = () => {
    const currentIndex = reviews.findIndex((item) => item.id === review);
    const nextIndex = (currentIndex + 1) % reviews.length;
    const nextReviewId = reviews[nextIndex].id;
    setReview(nextReviewId);
    selectReview(nextReviewId);
  };

  const changePrevReview = () => {
    const currentIndex = reviews.findIndex((item) => item.id === review);
    const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    const prevReviewId = reviews[prevIndex].id;
    setReview(prevReviewId);
    selectReview(prevReviewId);
  };
  return (
    <div
      id="reviews"
      className="flex flex-wrap justify-center items-center py-12"
    >
      <div className="w-full flex flex-wrap justify-center items-center gap-y-2 px-4 lg:px-0">
        <p
          className="w-full text-center  font-plus-500 text-xl lg:text-2xl"
          style={{ color: "#f5c90f" }}
        >
          Personas reales, resultados reales
        </p>
        <h1 className="text-3xl lg:text-5xl text-center font-plus-600 text-gray-200">
          Lo que opinan nuestros clientes.
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-start lg:px-32 my-10 lg:my-20 h-auto lg:h-[400px] gap-y-10">
        <div className="hidden lg:flex flex-wrap w-full lg:w-2/5  items-start justify-end gap-y-8 pr-8">
          <div
            className={`${
              review === "1" ? "bg-yellow-200 border-yellow-500" : "bg-white"
            } w-1/3 lg:w-full border-2 shadow-lg flex justify-between rounded-lg items-start lg:px-4 xl:px-10 lg:py-2 xl:py-4 h-[200px] lg:h-[100px] cursor-pointer`}
            onClick={() => selectReview("1")}
          >
            <div className="h-full flex justify-center items-center">
              <img src={man} width={60} height={60} alt="man-client" />
            </div>
            <div className="flex flex-wrap justify-center items-start h-full py-4 lg:py-0  xl:px-0">
              <h1 className="w-full text-center lg:text-lg xl:text-2xl font-plus-500 text-gray-800">
                Rodrigo Perez
              </h1>
              <p className="hidden lg:block w-full text-center lg:text-md xl:text-lg font-plus-300 text-gray-700">
                Cliente de Galindo S.A
              </p>
            </div>
            <div className="hidden lg:flex lg:text-sm items-start justify-center">
              <h1>⭐⭐⭐⭐⭐</h1>
            </div>
          </div>
          <div
            className={`${
              review === "2" ? "bg-yellow-200 border-yellow-500" : "bg-white"
            } w-1/3 lg:w-full border-2 shadow-lg flex justify-between rounded-lg items-start lg:px-4 xl:px-10 lg:py-2 xl:py-4 h-auto lg:h-[100px] cursor-pointer`}
            onClick={() => selectReview("2")}
          >
            <div className="h-full flex justify-center items-center">
              <img src={woman} width={60} height={60} alt="man-client" />
            </div>
            <div className="flex flex-wrap justify-center items-start h-full lg:px-2 xl:px-0">
              <h1 className="w-full text-center lg:text-lg xl:text-2xl font-plus-500 text-gray-800">
                Mara Perez
              </h1>
              <p className="hidden lg:block w-full text-center lg:text-md xl:text-lg font-plus-300 text-gray-700">
                Cliente de Galindo S.A
              </p>
            </div>
            <div className="hidden lg:flex lg:text-sm items-start justify-center">
              <h1>⭐⭐⭐⭐⭐</h1>
            </div>
          </div>
          <div
            className={`${
              review === "3" ? "bg-yellow-200 border-yellow-500" : "bg-white"
            } w-1/3 lg:w-full border-2 shadow-lg flex justify-between rounded-lg items-start lg:px-4 xl:px-10 lg:py-2 xl:py-4 h-[200px]   lg:h-[100px] cursor-pointer`}
            onClick={() => selectReview("3")}
          >
            <div className="h-full flex justify-center items-center">
              <img src={man} width={60} height={60} alt="man-client" />
            </div>
            <div className="flex flex-wrap justify-center items-start h-full lg:px-2 xl:px-0">
              <h1 className="w-full text-center lg:text-lg xl:text-2xl font-plus-500 text-gray-800">
                Rodrigo Paz
              </h1>
              <p className="hidden lg:block w-full text-center lg:text-md xl:text-lg font-plus-300 text-gray-700">
                Cliente de Galindo S.A
              </p>
            </div>
            <div className="hidden lg:flex lg:text-sm items-start justify-center">
              <h1>⭐⭐⭐⭐⭐</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap lg:hidden justify-center items-center px-8 py-4 h-[150px]">
          <div
            className={`
            bg-yellow-50 border-yellow-500  w-full lg:w-full border-2 shadow-lg flex justify-between rounded-lg items-start lg:px-6 xl:px-10 lg:py-2 xl:py-4 h-[130px] cursor-pointer`}
          >
            <div className="w-[20%] flex h-full justify-center items-center">
              <IoIosArrowDropleft
                className="text-3xl cursor-pointer hover:text-gray-800 "
                onClick={() => changePrevReview()}
              />
            </div>
            <div className="flex flex-wrap justify-center items-start h-full py-4 lg:py-0 lg:px-2 xl:px-0">
              <h1 className="w-full text-center text-3xl lg:text-4xl font-plus-500 text-gray-800">
                {revieSelected.name}
              </h1>
              <p className=" w-full text-center text-xl font-plus-400 text-gray-700 px-4">
                Cliente de Galindo S.A
              </p>
            </div>
            <div className="w-[20%] flex h-full justify-center items-center">
              <button
                className="flex justify-center items-center"
                onClick={() => changeNextReview()}
              >
                <IoIosArrowDropright className="text-3xl cursor-pointer hover:text-gray-800 " />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-auto h-full border border-gray-400"></div>
        <div className="w-full lg:w-2/5 flex flex-wrap items-start justify-start pl-8 gap-y-2">
          <div className="w-full">
            <h1>⭐⭐⭐⭐⭐</h1>
          </div>
          <div className="w-full">
            <h1 className="text-gray-200 font-plus-600 text-3xl">
              {revieSelected.title}
            </h1>
          </div>
          <div className="w-full text-gray-400">
            <p>{revieSelected.date}</p>
          </div>
          <div className="w-full ">
            <p className="text-gray-300 font-plus-500 text-lg">
              {revieSelected.description}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <a className="flex justify-center items-center" href="#calendly">
          <button className="text-2xl lg:text-3xl font-plus-600 border-2 rounded-3xl py-2 px-4 transition duration-400 button-calendly">
            Agendá una Visita
          </button>
        </a>
      </div>
    </div>
  );
};

export default Reviews;
