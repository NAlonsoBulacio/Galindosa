import React from "react";

const Amenities = ({ img, description, title }) => {
  return (
    <div className="flex justify-start items-start overflow-hidden rounded-lg shadow-xl bg-white space-x-2">
      <div className="w-[60%] overflow-hidden">
        <img className="object-cover w-full" src={img} alt="img-amenitie" />
      </div>
      <div className="w-[38%] flex flex-wrap items-start py-2 gap-y-2">
        <h1 className="w-full text-left text-2xl font-plus-500 text-gray-700">
          {title}
        </h1>
        <h1 className="text-left text-sm font-plus-300 text-gray-700">
          {description}
        </h1>
      </div>
    </div>
  );
};

export default Amenities;
