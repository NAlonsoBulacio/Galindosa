import React from "react";

const Amenities = ({ img, description, title }) => {
  return (
    <div className="flex flex-wrap justify-start items-start overflow-hidden rounded-lg shadow-xl bg-white hover:bg-yellow-100 gap-y-4 px-4 py-4 ransition duration-400">
      <div className="w-full overflow-hidden rounded-lg h-[230px] shadow-lg ">
        <img className="object-cover w-full " src={img} alt="img-amenitie" />
      </div>
      <div className="w-full h-[170px] flex flex-wrap items-start">
        <div>
          <h1 className="w-full text-left text-3xl font-plus-500 text-gray-700">
            {title}
          </h1>
        </div>
        <div>
          <h1 className="text-left text-lg font-plus-300 text-gray-700">
            {description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
