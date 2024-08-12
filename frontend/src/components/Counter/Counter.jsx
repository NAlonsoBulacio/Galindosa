import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Counter.css";
const Counter = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(0);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const incrementCount = (currentCount, setCount, maxCount, increment) => {
    if (currentCount < maxCount) {
      setTimeout(() => {
        setCount(Math.min(currentCount + increment, maxCount));
      }, 500 / ((maxCount - currentCount) / increment));
    }
  };

  if (inView1) {
    incrementCount(count1, setCount1, 57, 1);
  }

  if (inView2) {
    incrementCount(count2, setCount2, 1.9, 0.1);
  }

  return (
    <div className="w-full flex justify-center items-center py-12"
    >
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-10 notranslate">
        <div className="w-1/3 flex flex-wrap justify-start items-center">
          <div
            ref={ref1}
            className="w-full flex justify-center md:justify-center items-center"
          >
            <p className="text-gray-600 poppins-bold text-center w-32 md:w-40 text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              +{count1}K
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-center px-6">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } text-center poppins-regular text-gray-900 text-xs lg:text-xl`}
            >
              Proyectos Realizados
            </h1>
          </div>
        </div>
        <div className="w-1/3 flex flex-wrap justify-center items-center">
          <div
            ref={ref2}
            className="w-full flex justify-center md:justify-center items-center"
          >
            <p className="text-gray-600 poppins-bold text-center w-32 md:w-40 text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              +{count2.toLocaleString(undefined, { minimumFractionDigits: 1 })}K
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-center px-6">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } text-center poppins-regular text-gray-900 text-xs lg:text-xl`}
            >
              Años De Trayectoria
            </h1>
          </div>
        </div>
        <div className="h-full w-1/3 flex flex-wrap justify-center items-center">
          <div
            ref={ref1}
            className="w-full h-2/3 flex justify-center md:justify-center items-center"
          >
            <p className="text-gray-600 poppins-bold text-center  w-32 md:w-40 text-4xl md:text-5xl lg:text-5xl ">
              +0,00
            </p>
          </div>
          <div className="justify-center md:justify-center">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } text-center poppins-regular text-gray-900 text-xs lg:text-xl`}
            >
              De Adquisición Geofísica
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
