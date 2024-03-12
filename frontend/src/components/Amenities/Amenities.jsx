import React from "react";

const Amenities = ({ amenitie, handleFullScreen }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector("h1").classList.add("opacity-100");
    e.currentTarget.querySelector("img").classList.add("brightness-[.3]");
    e.currentTarget.querySelector("img").classList.add("scale-110");
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector("h1").classList.remove("opacity-100");
    e.currentTarget.querySelector("img").classList.remove("brightness-[.3]");
    e.currentTarget.querySelector("img").classList.remove("scale-110");
  };

  const handleClick = (urls, full) => {
    handleFullScreen(urls, full);
  };
  return (
    <div className="flex flex-wrap justify-start items-start overflow-hidden rounded-lg shadow-xl bg-transparent gap-y-2 transition duration-400">
      {amenitie ? (
        <>
          <div
            className="w-full overflow-hidden rounded-lg h-[225px] lg:h-[225px] shadow-lg cursor-pointer relative"
            onClick={() => handleClick(amenitie.urls, true)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="object-cover object-center w-full h-full transition duration-700 "
              src={amenitie.urls[0]}
              alt="img-amenitie"
            />
            <h1 className="absolute inset-0 opacity-0  transition duration-700 text-white flex justify-center items-center text-2xl">
              {amenitie.text}
            </h1>
          </div>
          <div className="w-full h-[45px] lg:hidden flex flex-wrap items-start">
            <div className="w-full flex justify-center px-2">
              <h1 className="w-full text-left text-2xl lg:text-xl font-plus-600 text-gray-300">
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
