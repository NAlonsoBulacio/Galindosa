import React from "react";

const CEOMessage = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-gray-100 py-12 px-4 lg:px-20"
      style={{
        backgroundImage:
          "url(https://grupoproaco.com/images/bgs/company-01.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://spazios.com.ar/img/nosotros.jpg"
              alt="CEO"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 lg:mt-0 lg:ml-6 flex-grow">
            <h2 className="text-2xl lg:text-4xl poppins-bold text-gray-800 mb-4">
              Querida industria madre
            </h2>
            <p className="text-gray-600 text-justify poppins-light leading-relaxed">
              Sabemos que con cada proyecto que iniciamos comienzan los de
              muchos otros. Una familia por su hogar, un operario por su
              trabajo, un vecino por su barrio, un estudio por sus líneas, una
              fábrica por sus materiales, un municipio por su ciudad… y así una
              rueda enorme empieza a girar a una velocidad imparable. Sentimos
              que tenemos una gran responsabilidad, que lejos de ahuyentarnos
              nos llena de fuerza y pasión para hacerlo cada día mejor. Pero
              nadie puede lograrlo solo, necesitamos de cada uno de nuestros
              aliados, para llevar adelante este enorme desafío. Querida
              industria madre, acá estamos, nosotros listos para avanzar.
            </p>
            <p className="mt-4 text-lg poppins-light-italic font-semibold text-gray-800">
              Lucas Salim
              <br />
              CEO & Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOMessage;
