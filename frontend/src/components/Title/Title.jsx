import React from "react";
import { useInView } from "react-intersection-observer";
const Title = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="flex justify-center items-center pt-32 pb-16">
      <div ref={ref1} className={`px-4 lg:px-32`}>
        <h1
          className={`${
            inView1
              ? "opacity-100 transition-opacity duration-[1s]"
              : "opacity-0"
          } hidden lg:block text-3xl lg:text-6xl font-plus-600 text-gray-700 text-center`}
          style={{ lineHeight: "1.3" }}
        >
          Nuevo video <span className="" style={{color: "#f5c90f"}}>revela</span> cual es el sistema <span className="" style={{color: "#f5c90f"}}>Optimo</span> probado para tu construccion
        </h1>
        <h1
          className={`${
            inView1
              ? "opacity-100 transition-opacity duration-[1s]"
              : "opacity-0"
          } lg:hidden text-3xl lg:text-6xl font-plus-600 text-gray-700`}
          style={{ lineHeight: "1.3" }}
        >
          Nuevo video revela cual es el sistema probado para escalar una marca ecommerce a 7 cifras
        </h1>
      </div>
    </div>
  );
};

export default Title;
