import React, { useState, useEffect } from "react";
import "./ProjectsContainer.css";
import loading from "../../../assets/ripples.svg";

const ProjectsContainer = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(20);

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector("div").classList.add("opacity-100");
    e.currentTarget.querySelector("img").classList.add("brightness-50");
    e.currentTarget.querySelector("img").classList.add("scale-110");
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector("div").classList.remove("opacity-100");
    e.currentTarget.querySelector("img").classList.remove("brightness-50");
    e.currentTarget.querySelector("img").classList.remove("scale-110");
  };

  const handleShowMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 10);
  };

  return (
    <div className="w-full flex flex-wrap justify-center items-center space-y-10 mb-6 lg:mb-20">
      {projects.length ? (
        <>
          <div className="w-full columns-1 gap-4 lg:gap-4 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-6">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <div key={project.id}>
                <a href={`/proyecto/${project.slug}`}>
                  <div
                    className="w-auto h-auto border-[1px] rounded-xl relative overflow-hidden cursor-pointer transition-opacity duration-500 opacity-100"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={project.img}
                      alt={`Project ${index}`}
                      className="w-full h-auto hover:scale-110 transition duration-700 shadow-2xl hover:brightness-50"
                    />
                    <div className="absolute flex flex-col inset-0 opacity-0 transition duration-700 text-white  justify-center items-center poppins-semibold text-2xl">
                      <h1>{project.name}</h1>
                      <p className="w-full text-sm  poppins-light text-center text-balance text-gray-100">
                      {project.introDescription}
                    </p>
                    </div>
                    
                  </div>
                </a>
              </div>
            ))}
          </div>
          {visibleProjects < projects.length && (
            <button
              onClick={handleShowMore}
              className="mt-10  text-white px-4 py-2 rounded"
            >
              Mostrar más
            </button>
          )}
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <img className="w-[200px]" src={loading} alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default ProjectsContainer;
