import React from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";

const FeaturedProperties = () => {
  const properties = [
    {
      image:
        "https://grupoproaco.com/img/7026c98b-933e-4d98-a3da-98de033aee1b/minuatura-web-proaco-park.jpg?q=80&fit=max&crop=1093%2C1060%2C0%2C0",
      title: "Barrio Norte ",
      description: "Descripción breve de Barrio Norte",
    },
    {
      image:
        "https://grupoproaco.com/img/f2fee7c1-ae65-4991-bb10-950b74d43cd5/Miniatura-Pocito.jpg?q=80&fit=max&crop=600%2C400%2C0%2C0",
      title: "Barrio Sur",
      description: "Descripción breve de Barrio Sur",
    },
    {
      image:
        "https://grupoproaco.com/img/a3975f2b-bbe4-4264-9a81-c5cacb19227b/5421_Foto-principal-emprendimiento.jpg?q=80&fit=max&crop=455%2C410%2C0%2C0",
      title: "Mate de Luna",
      description: "Descripción breve de Mate de Luna",
    },
  ];

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <h1 className="poppins-regular text-4xl text-gray-700 text-center lg:text-left">
          Proyectos{" "}
          <span className="poppins-bold text-[#ffc702]">Por Ubicación</span>
        </h1>
        <hr className="w-32 border-t-[3px] border-[#ffc702] mt-2" />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center mt-8">
        {properties.map((property, index) => (
          <FeaturedCard
            key={index}
            image={property.image}
            title={property.title}
            description={property.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
