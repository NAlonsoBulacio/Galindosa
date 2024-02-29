import React from "react";
import { useInView } from "react-intersection-observer";
const Title = ({title}) => {


  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="flex flex-wrap justify-center items-center pt-4 lg:pt-32 pb-6 lg:pb-10 gap-y-4">
      <div
        ref={ref1}
        className={`w-full flex justify-center items-center px-4 lg:px-32 `}
      >
        <h1
          className={`${
            inView1
              ? "opacity-100 transition-opacity duration-[1s]"
              : "opacity-0"
          } hidden lg:block text-3xl lg:text-5xl xl:text-6xl font-plus-600 text-gray-200 text-center`}
          style={{ lineHeight: "1.3" }}
          dangerouslySetInnerHTML={{ __html: title }}
        >

        </h1>
        <h1
          className={`${
            inView1
              ? "opacity-100 transition-opacity duration-[1s]"
              : "opacity-0"
          } lg:hidden text-center pt-6 font-plus-600 text-gray-200`}
          style={{ lineHeight: "1.3", fontSize: "33px" }}
        >
          Casa a&nbsp;
          <span className="" style={{ color: "#f5c90f" }}>
            ESTRENAR
          </span>
          &nbsp;en <br/>el country Yerba buena Jockey club (Viejo Golf)
        </h1>
      </div>
      <div className="w-full px-4">
        <h1 className="text-center text-xl text-gray-300 font-plus-300">Te invito a ver este video de x minutos donde te mostraremos la propiedad ⬇️</h1>
      </div>
    </div>
  );
};

export default Title;
