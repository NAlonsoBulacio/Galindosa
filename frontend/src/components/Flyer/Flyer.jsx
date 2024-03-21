import React, { useRef, useEffect } from "react";
import logoG from "../../assets/logo-g.png";
import "./Flyer.css";
const Flyer = () => {
  const flyerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Porcentaje de intersección que activará el evento (en este caso, 50%)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.fbq("trackCustom", "70%UserView");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (flyerRef.current) {
      observer.observe(flyerRef.current);
    }

    return () => {
      if (flyerRef.current) {
        observer.unobserve(flyerRef.current);
      }
    };
  }, []);
  return (
    <div ref={flyerRef} className="w-full md:px-0 py-10 md:py-20 lg:py-20 xl:py-32 flex flex-wrap justify-center items-center space-x-4 px-4 bg-gray-200">
      <div className="w-1/4 md:w-1/4 flex justify-center items-center">
        <div className="w-[80px] h-[80px] lg:w-[125px] lg:h-[125px] flex justify-center items-center rounded-full bg-transparent pr-2">
          <img className="w-[55px] lg:w-[200px]" src={logoG} alt="logo" />
        </div>
      </div>
      <div className="w-[65%] flex justify-center items-center">
        <h1
          className="text-gray-900 font-lato-700 text-2xl md:text-4xl lg:text-6xl text-center"
          style={{ lineHeight: "1.3" }}
        >
          40 años de trayectoria definen nuestra identidad.
        </h1>
      </div>
    </div>
  );
};

export default Flyer;
