import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Counter.css";
const Counter = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(10000);

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
    incrementCount(count1, setCount1, 50, 1);
  }

  if (inView2) {
    incrementCount(count2, setCount2, 49, 1);
  }
  if (inView3) {
    incrementCount(count3, setCount3, 300000, 10000);
  }

  return (
    <div className="w-full flex justify-center items-center py-12">
      <div className="flex flex-wrap justify-between items-center px-0 lg:px-10 notranslate">
        <div className="w-1/3 flex flex-wrap justify-start items-center">
          <div
            ref={ref1}
            className="w-full flex justify-center md:justify-center items-center"
          >
            <p className="text-gray-600 poppins-bold text-center text-3xl md:text-5xl ">
              +{count1}
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-center px-6">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } text-center poppins-regular text-gray-900 text-xs lg:text-xl`}
            >
              Edificios
            </h1>
          </div>
        </div>

        <div className="h-full w-1/3 flex flex-wrap justify-center items-center text-center">
          <div
            ref={ref1}
            className="w-full h-2/3 flex justify-center md:justify-center items-center"
          >
            <p className="text-gray-600 poppins-bold text-center   text-3xl md:text-5xl  ">
              +{count3.toLocaleString()}
            </p>
          </div>
          <div className="justify-center md:justify-center">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } text-center poppins-regular text-gray-900 text-xs lg:text-xl justify-center`}
            >
              M² Construidos
            </h1>
          </div>
        </div>
        <div className="w-1/3 flex flex-wrap justify-center items-center">
          <div
            ref={ref2}
            className="w-full flex justify-center md:justify-center items-center"
          >
            <p className="text-gray-600 poppins-bold text-center w-32 md:w-40 text-3xl md:text-5xl flex justify-center items-center gap-x-1">
              {count2}{" "}
              <span className=" text-center poppins-bold text-gray-600 text-xs lg:text-xl">
                Años
              </span>
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-center px-6">
            <h1
              ref={ref3}
              className={`${
                inView3 ? "animatable-type" : "initial-type"
              } text-center poppins-regular text-gray-900 text-xs lg:text-xl`}
            >
              De Trayectoria
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
