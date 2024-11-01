import React from "react";
import videoSource from "../../../assets/video.mp4";
const AboutHome = () => {
  return (
    <div className="relative flex flex-col md:flex-row  lg:items-start justify-center bg-white py-10 md:p-16 lg:px-32">
      <div className="md:w-1/2 pr-0 md:pr-8">
        <h3 className="text-[#ffc702] poppins-semibold text-xl mb-4 tracking-widest">
          SOBRE NOSOTROS
        </h3>
        <h2 className="text-3xl text-gray-700 poppins-bold mb-4">
          Somos la constructora N°1 de Tucumán
        </h2>
        <p className="text-lg mb-4 poppins-light">
          <strong className="poppins-semibold">
          Es una empresa familiar que, desde el año 2000, ha continuado y extendido la visión de G.B.G CONSTRUCCIONES S.R.L, fundada en 1975 por el Ing. Miguel E. Galindo.
          </strong>{" "}
          Con más de cuatro décadas en el mercado inmobiliario, GALINDO S.A. Se destaca por su compromiso con la calidad y la innovación, desarrollando proyectos ambiciosos que marcan la diferencia en el sector. Nuestra capacidad en recursos humanos y financieros, sumada a diseños vanguardistas y tecnología avanzada, nos posiciona como líderes en la construcción de productos que ofrecen un valor agregado único a nuestros clientes.


        </p>
        <p className="text-[#ffc702] text-lg poppins-regular">
          #DesarrollamosTendencia
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 relative z-10">
        <iframe
          className="w-full h-auto aspect-video"
          src="https://www.youtube.com/embed/CwnyZ3ELhbc?autoplay=1&mute=1&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div
        className="hidden lg:block absolute inset-0 bg-no-repeat bg-right"
        style={{
          backgroundImage: `url(${videoSource})`,
        }}
      ></div>
    </div>
  );
};

export default AboutHome;
