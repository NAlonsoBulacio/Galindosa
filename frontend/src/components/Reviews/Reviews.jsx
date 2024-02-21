import React, { useState } from "react";
import man from "../../assets/man.svg";
import woman from "../../assets/woman.svg";
const Reviews = () => {
  const [review, setReview] = useState("1");
  const [revieSelected, setReviewSelected] = useState({
    id: "1",
    title:
      "Espectacular! Incomparable con cremas de 600€. Efectividad en 3-4 días.",
    date: "20/01/2022",
    description:
      "El cóctel de serum más crema es espectacular!!!! Incomparable con cremas de 600€, muchísimo mejor y efectivad en 3-4 días.",
  });

  const reviews = [
    {
      id: "1",
      title:
        "Espectacular! Incomparable con cremas de 600€. Efectividad en 3-4 días.",
      date: "20/01/2022",
      description:
        "El cóctel de serum más crema es espectacular!!!! Incomparable con cremas de 600€, muchísimo mejor y efectivad en 3-4 días.",
    },
    {
      id: "2",
      title: "ME ENCANTA! Muy agradecida con cruzarme a Galidno S.A",
      date: "20/09/2012",
      description:
        "El cóctel de serum más crema es espectacular!!!! Incomparable con cremas de 600€, muchísimo mejor y efectivad en 3-4 días.",
    },
    {
      id: "3",
      title: "Gracias Galindo S.A.",
      date: "20/03/1900",
      description:
        "El cóctel de serum más crema es espectacular!!!! Incomparable con cremas de 600€, muchísimo mejor y efectivad en 3-4 días.",
    },
  ];

  const selectReview = (id) => {
    const selectedReview = reviews.find((review) => review.id === id);
    setReviewSelected(selectedReview);
    setReview(id);
  };

  return (
    <div className="flex flex-wrap justify-center items-start px-32 my-20 h-[400px]">
      <div className="w-2/5 flex flex-wrap items-start justify-end gap-y-8 pr-8">
        <div
          className={`${
            review === "1" ? "bg-yellow-200 border-2 border-yellow-400" : "bg-white"
          } w-full border-gray-500 shadow-lg flex justify-between rounded-lg items-start px-10 py-4 h-[100px] cursor-pointer`}
          onClick={() => selectReview("1")}
        >
          <div className="h-full flex justify-center items-center">
            <img src={man} width={60} height={60} alt="man-client" />
          </div>
          <div className="flex flex-wrap justify-center items-start h-full">
            <h1 className="w-full text-center text-2xl font-plus-500 text-gray-800">
              Rodrigo Perez
            </h1>
            <p className="w-full text-center text-lg font-plus-300 text-gray-700">
              Cliente de Galindo S.A
            </p>
          </div>
          <div className="flex items-start justify-center">
            <h1>⭐⭐⭐⭐⭐</h1>
          </div>
        </div>
        <div
          className={`${
            review === "2" ? "bg-yellow-200 border-2 border-yellow-400" : "bg-white"
          } w-full border-gray-500 shadow-lg flex justify-between rounded-lg items-start px-10 py-4 h-[100px] cursor-pointer`}
          onClick={() => selectReview("2")}
        >
          <div className="h-full flex justify-center items-center">
            <img src={woman} width={60} height={60} alt="man-client" />
          </div>
          <div className="flex flex-wrap justify-center items-start h-full">
            <h1 className="w-full text-center text-2xl font-plus-500 text-gray-800">
              Mara Dominguez
            </h1>
            <p className="w-full text-center text-lg font-plus-300 text-gray-700">
              Cliente de Galindo S.A
            </p>
          </div>
          <div className="flex items-start justify-center">
            <h1>⭐⭐⭐⭐⭐</h1>
          </div>
        </div>
        <div
          className={`${
            review === "3" ? "bg-yellow-200 border-2 border-yellow-400" : "bg-white"
          } w-full border-gray-500 shadow-lg flex justify-between rounded-lg items-start px-10 py-4 h-[100px] cursor-pointer`}
          onClick={() => selectReview("3")}
        >
          <div className="h-full flex justify-center items-center">
            <img src={man} width={60} height={60} alt="man-client" />
          </div>
          <div className="flex flex-wrap justify-center items-start h-full">
            <h1 className="w-full text-center text-2xl font-plus-500 text-gray-800">
              Marco Robles
            </h1>
            <p className="w-full text-center text-lg font-plus-300 text-gray-700">
              Cliente de Galindo S.A
            </p>
          </div>
          <div className="flex items-start justify-center">
            <h1>⭐⭐⭐⭐⭐</h1>
          </div>
        </div>
      </div>
      <div className="w-auto h-full border border-gray-400"></div>
      <div className="w-2/5 flex flex-wrap items-start justify-start pl-8 gap-y-2">
        <div className="w-full">
          <h1>⭐⭐⭐⭐⭐</h1>
        </div>
        <div className="w-full">
          <h1 className="text-gray-800 font-plus-600 text-3xl">{revieSelected.title}</h1>
        </div>
        <div className="w-full">
          <p>{revieSelected.date}</p>
        </div>
        <div className="w-full ">
          <p className="text-gray-700 font-plus-400 text-lg">{revieSelected.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
