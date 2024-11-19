import React from "react";
import { newsData } from "../../../utils/newsData";
// const newsData = [
//   {
//     image:
//       "https://grupoproaco.com/img/b231a9d5-96a5-4e6f-8ad0-3141d5fae076/Untitleddesign.jpg?q=80&fit=max&crop=5382%2C3588%2C0%2C0",
//     category: "PRENSA",
//     title:
//       "Galindo S.A., en el top de los lugares más buscados para vivir en Córdoba",
//     description:
//       "Según la última investigación de Clasificados La Voz, Galindo S.A. emerge como el principal destino para quienes buscan establecerse o invertir en la ciudad. Con más de 270 propiedades disponibles para venta o alquiler, esta moderna urbanización se coloca en la cima del ranking, consolidándose como el lugar preferido de los cordobeses para vivir y construir.",
//     link: "#",
//   },
//   {
//     image:
//       "https://grupoproaco.com/img/32f08eb9-586d-4848-b4be-9cd8948d2f43/avancesdeobra.jpg?q=80&fit=max&crop=1279%2C720%2C0%2C0",
//     category: "DESARROLLISMO",
//     title:
//       "Galindo S.A. entregó la Estación Transformadora de energía eléctrica a EPEC",
//     description:
//       "Galindo S.A. entregó la Estación Transformadora de energía eléctrica a EPEC.",
//     link: "#",
//   },
//   {
//     image:
//       "https://grupoproaco.com/img/ca00c522-47a0-4316-9eed-8301177decf6/avancesdeobra.jpg?q=80&fit=max&crop=1279%2C720%2C0%2C0",
//     category: "DESARROLLISMO",
//     title:
//       "El Estudio ZAP presentó el Distrito Córdoba Shopping con Galindo S.A.",
//     description:
//       "El Arquitecto Javier Zanotti (Estudio de Arquitectura ZAP) reveló DÚO, un nuevo proyecto inmobiliario integrado al primer gran centro comercial de la ciudad. Se trata de dos torres residenciales y un edificio corporativo, que se complementa con nuevos estacionamientos y que potenciará este tradicional sector de Córdoba. Como gran novedad, apuntará a la sustentabilidad, marcando el hito de ser las primeras torres del interior de Argentina con generación distribuida.",
//     link: "#",
//   },
// ];

const NewsCards = () => {
  return (
    <div className="container mx-auto py-10 lg:px-32">
      <div className="w-full flex flex-col items-center mb-10">
        <h1 className="poppins-regular text-4xl text-gray-700 text-center lg:text-left">
         
          <span className="poppins-bold text-[#ffc702]">Novedades</span>
        </h1>
        <hr className="w-32 border-t-[3px] border-[#ffc702] mt-2" />
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${newsData.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-8`}>
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-xs text-gray-500 uppercase">
                {news.category}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">
                {news.title}
              </h2>
              <p className="mt-2 text-gray-600">{news.fullText}</p>
              <a
                href={news.link}
                className="mt-4 inline-block text-blue-500 hover:text-blue-600"
              >
                Leer más &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;
