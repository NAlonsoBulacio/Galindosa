import React from "react";
import { IoIosContacts } from "react-icons/io";
import { banner4 } from "../../../assets"; // Asegúrate de que la importación sea correcta

const FlyerContact = () => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center relative h-[45vh] lg:h-[68vh]">
      <div className="z-10 absolute top-[55%] bottom-[50%] w-full flex flex-col justify-center items-center gap-y-4">
        <h1 className="poppins-bold text-white text-2xl lg:text-5xl text-center w-full">
          Nuestra empresa
        </h1>
        <p className="poppins-regular text-gray-50 text-lg lg:text-xl text-center px-2 lg:px-40">
          Somos visionarios y disfrutamos marcando nuevos horizontes, porque
          sabemos que el futuro se construye en el presente. Desarrollamos
          tendencias porque vemos más allá, ofreciendo hoy, a cada uno de
          nuestros públicos, una propuesta de valor que se anticipa a las
          necesidades del mañana.
        </p>
        <a
          href="/"
          className="bg-[#ccad24] hover:bg-[#a18c2d] duration-300 text-gray-50 flex justify-center items-center px-4 py-2 rounded-full text-sm lg:text-lg gap-x-2"
        >
          Consultá con un asesor <IoIosContacts className="text-2xl" />
        </a>
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${banner4})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div
        className="absolute block lg:hidden inset-0 z-0"
        style={{
          backgroundImage: `url(${banner4})`,
          backgroundSize: "100% 100%",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default FlyerContact;
