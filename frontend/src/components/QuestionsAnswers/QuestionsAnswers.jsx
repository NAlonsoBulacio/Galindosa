import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./QuestionsAnswers.css";
const QuestionsAnswers = ({ textosDeQA }) => {
  const [answer, setAnswer] = useState("");

  // const question_answer = [
  //   {
  //     text: "¿Como utilizo los productos?",
  //   },
  //   {
  //     text: "¿Como utilizo los productos?",
  //   },
  //   {
  //     text: "¿Como utilizo los productos?",
  //   },
  //   {
  //     text: "Debe colocarlo en su rostro",
  //   },
  //   {
  //     text: "Tras limpiar la piel, aplica 4 gotas del serum antiarrugas.Posteriormente, aplica la crema antiedad reparadora.",
  //   },
  //   {
  //     text: "Tras limpiar la piel, aplica 4 gotas del serum antiarrugas.Posteriormente, aplica la crema antiedad reparadora.",
  //   },
  // ];
  const midpoint = Math.ceil(textosDeQA.length / 2);
  const secondHalf = textosDeQA.slice(midpoint);
  const firstHalf = textosDeQA.slice(0, midpoint);

  const clearQA = [];

  for (let i = 0; i < firstHalf.length; i++) {
    const question = firstHalf[i].text;
    const answer = secondHalf[i].text;

    const qaObject = {
      id: i, // Agregando la propiedad id con el valor del índice
      question: question,
      answer: answer,
    };

    clearQA.push(qaObject);
  }


  const handleAnswer = (answerId) => {
    setAnswer((prevAnswer) => (prevAnswer === answerId ? "" : answerId));
  };

  return (
    <div
      id="q&a"
      className="w-full flex flex-wrap justify-center items-center pt-10 pb-10 px-4 lg:px-0"
    >
      <div className="w-full md:w-[950px] flex flex-wrap justify-start items-center text-xl md:text-2xl space-y-2 px-2">
        <div className="w-full text-left">
          <h1
            className="text-4xl md:text-4xl font-plus-600"
            style={{ color: "#f5c90f" }}
          >
            FAQ's
          </h1>
        </div>
        {clearQA?.map((qa) => (
          <>
            <div className="w-full">
              <button
                className="w-full flex justify-between items-center font-inter-600 space-x-2 text-gray-200"
                onClick={() => {
                  answer !== qa.id ? handleAnswer(qa.id) : handleAnswer("");
                }}
              >
                <span className="w-3/4 flex-grow text-left font-plus-500 ">
                  {qa.question}
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
                answer === qa.id ? "show" : ""
              }`}
            >
              <span className="flex-grow text-left font-plus-300 text-gray-400">
                {qa.answer}
              </span>
            </div>
            <div className="w-full flex justify-center ">
              <div className="w-full">
                <hr className=" border-[1.5px] border-gray-400" />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAnswers;
