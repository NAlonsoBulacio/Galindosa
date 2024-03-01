import React from "react";

const Amenities = ({ amenitie }) => {
  return (
    <div className="flex flex-wrap justify-start items-start overflow-hidden rounded-lg shadow-xl bg-gray-100 border-2 hover:border-yellow-500  hover:bg-yellow-100 gap-y-4 px-4 py-4 ransition duration-400">
      {amenitie ? (
        <>
          <div className="w-full overflow-hidden rounded-lg h-[230px] lg:h-[230px] shadow-lg ">
            <img
              className="object-cover w-full "
              src={amenitie.attributes.url}
              alt="img-amenitie"
            />
          </div>
          <div className="w-full h-[85px] flex flex-wrap items-start">
            <div>
              <h1 className="w-full text-left text-lg font-plus-600 text-gray-700">
                {amenitie.attributes.caption}
              </h1>
            </div>

          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Amenities;
