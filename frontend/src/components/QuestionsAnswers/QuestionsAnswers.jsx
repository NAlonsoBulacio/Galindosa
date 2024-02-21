import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswers.css";
const QuestionsAnswers = () => {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  return (
    <div className="w-full flex justify-center items-center my-6">
      <div className="w-full md:w-[950px] flex flex-wrap justify-start items-center text-xl md:text-4xl space-y-4 px-2">
        <div className="w-full text-left">
          <h1 className="text-4xl md:text-6xl font-plus-600 text-yellow-700">
            FAQ's
          </h1>
        </div>
        <div className="w-full text-left">
          <button
            className="w-full flex justify-between items-center font-inter-600 space-x-2"
            onClick={() => {
              answer !== "answer1" ? handleAnswer("answer1") : handleAnswer("");
            }}
          >
            <span className="flex-grow text-left">
              ¿Como utilizo los productos?
            </span>
            <IoIosArrowDown
              className="w-1/4 md:w-auto"
              style={{
                transform: `rotate(${answer === "answer1" ? 180 : 0}deg)`,
                transition: "transform 0.5s",
              }}
            />
          </button>
        </div>
        <div
          className={`w-full answer text-xl md:text-2xl ${
            answer === "answer1" ? "show" : ""
          }`}
        >
          <span className="flex-grow text-left">
          Tras limpiar la piel, aplica 4 gotas del serum antiarrugas. Posteriormente, aplica la crema antiedad reparadora.
          </span>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-full">
            <hr className=" border-[1.5px] border-gray-400" />
          </div>
        </div>
        <div className="w-full">
          <button
            className="w-full flex justify-between items-center font-inter-600 space-x-2"
            onClick={() => {
              answer !== "answer2" ? handleAnswer("answer2") : handleAnswer("");
            }}
          >
            <span className="flex-grow text-left">
              ¿Esta rutina de pieles es buena para cualquier tipo?
            </span>
            <IoIosArrowDown
              className="w-1/4 md:w-auto"
              style={{
                transform: `rotate(${answer === "answer2" ? 180 : 0}deg)`,
                transition: "transform 0.5s",
              }}
            />
          </button>
        </div>
        <div
          className={`w-full answer text-xl md:text-2xl ${
            answer === "answer2" ? "show" : ""
          }`}
        >
          Si, está recomendada para todo tipo de pieles, incluidas las sensibles y propensas al acné.
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-full">
            <hr className=" border-[1.5px] border-gray-400" />
          </div>
        </div>
        <div className="w-full">
          <button
            className="w-full flex justify-between items-center font-inter-600 space-x-2"
            onClick={() => {
              answer !== "answer3" ? handleAnswer("answer3") : handleAnswer("");
            }}
          >
            <span className="flex-grow text-left">
              ¿Cuando se comienzan a notar los resultados?
            </span>
            <IoIosArrowDown
              className="w-1/4 md:w-auto"
              style={{
                transform: `rotate(${answer === "answer3" ? 180 : 0}deg)`,
                transition: "transform 0.5s",
              }}
            />
          </button>
        </div>
        <div
          className={`w-full answer text-xl md:text-2xl ${
            answer === "answer3" ? "show" : ""
          }`}
        >
         Podrás comenzar a ver resultados en una semana, con resultados completos que generalmente aparecen después de 14-30 días de uso. Con el tiempo, los resultados serán aún más notables.
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-full">
            <hr className=" border-[1.5px] border-gray-400" />
          </div>
        </div>
        <div className="w-full">
          <button
            className="w-full flex justify-between items-center font-inter-600 space-x-2 text-left"
            onClick={() => {
              answer !== "answer4" ? handleAnswer("answer4") : handleAnswer("");
            }}
          >
            ¿Los productos estan testeados en animales?
            <IoIosArrowDown
              className="w-1/4 md:w-auto"
              style={{
                transform: `rotate(${answer === "answer4" ? 180 : 0}deg)`,
                transition: "transform 0.5s",
              }}
            />
          </button>
        </div>
        <div
          className={`w-full answer text-xl md:text-2xl ${
            answer === "answer4" ? "show" : ""
          }`}
        >
          Ninguno de nuestros productos están testados en animales.
        </div>
      </div>
    </div>
  );
};

export default QuestionsAnswers;
