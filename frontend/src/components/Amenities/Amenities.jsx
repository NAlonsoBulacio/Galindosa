import React from "react";

const Amenities = ({ amenitie, handleFullScreen }) => {
  const handleClick = (urls, full) => {
    handleFullScreen(urls, full);
  };
  return (
    <div className="flex flex-wrap justify-start items-start overflow-hidden rounded-lg shadow-xl bg-gray-100 border-2 hover:border-yellow-500  hover:bg-yellow-100 gap-y-4 p-3 ransition duration-400">
      {amenitie ? (
        <>
          <div className="w-full overflow-hidden rounded-lg h-[215px] lg:h-[215px] shadow-lg cursor-pointer"
            onClick={() => handleClick(amenitie.urls, true)}
          >
            <img
              className="object-cover w-full "
              src={amenitie.urls[0]}
              alt="img-amenitie"
            />
          </div>
          <div className="w-full h-[85px] flex flex-wrap items-start">
            <div className="w-full flex justify-center">
              <h1 className="w-full text-left text-2xl lg:text-xl font-plus-600 text-gray-700">
                {amenitie.text}
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
