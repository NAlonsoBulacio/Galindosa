import React, { useState, useEffect } from "react";
import Footer from "../../components/newComponents/Footer/Footer";
import Header from "../../components/newComponents/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { emptyDetail, getProjects } from "../../redux/actions";
import "./Project.css";
import GoogleMapEmbed from "../../components/GoogleMapEmbed/GoogleMapEmbed";
import Amenities from "../../components/newComponents/Amenities/Amenities";
import BlueprintsCarousel from "../../components/newComponents/Blueprints/Blueprints";
import SectionCard from "../../components/SectionCard/SectionCard";
import ContactForm from "../../components/newComponents/ContactForm/ContactForm";
import Banner from "../../components/newComponents/Flyers/Banner/ProjectBanner";

const Project = ({ match }) => {
  const projectsR = useSelector((state) => state.projects);
  const projectSlug = match.params.slug;
  const dispatch = useDispatch();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useEffect(() => {
    const filteredProject = projectsR.find((p) => p.slug === projectSlug);
    setDetail(filteredProject);
  }, [projectSlug, projectsR]);

  useEffect(() => {
    return () => {
      dispatch(emptyDetail());
    };
  }, [dispatch]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      {detail ? (
        <div className="mt-[80px] lg:mt-0">
          {detail.presentImages && detail.presentImages.length > 0 && (
            <Banner banners={detail.presentImages} name={detail.name} />
          )}
          <Header />
          <div className="block lg:hidden bg-gray-900 py-4 border-b-[1px] border-b-[#ffc702]">
            <p
              onClick={toggleForm}
              className="text-gray-100 text-center text-lg poppins-regular cursor-pointer"
            >
              Solicitar Info
            </p>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isFormOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ContactForm />
            </div>
          </div>
          <div className="">
            <Amenities amenities={detail.amenities} />
          </div>
          <div className="flex flex-wrap py-4 lg:py-10 px-2 lg:px-32 ">
            <div
              className={` ${
                detail.video
                  ? "lg:w-1/2 lg:px-8"
                  : "lg:w-full lg:px-32 lg:py-10"
              } w-full  flex flex-col  mb-2 px-0 `}
            >
              <div className="w-full mb-2">
                <h1 className="text-left text-3xl lg:text-4xl l poppins-semibold text-gray-800 font-bold">
                  {detail.introDescription}
                </h1>
              </div>
              <div className="w-full">
                <div 
                className="text-sm lg:text-md poppins-light"
                style={{ listStyleType: 'disc', paddingLeft: '20px' }}
                dangerouslySetInnerHTML={{ __html: detail.description }}
                >

                </div>
              </div>
            </div>
            {detail.video ? (
              <div className="w-full lg:w-1/2 relative h-[230px] lg:h-[355px]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${detail.video}?si=NIaYAchzrJUl9LMn`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="w-full flex  justify-center items-start bg-black text-white py-12 px-2 lg:px-0">
            <div className="container flex flex-wrap lg:flex-nowrap justify-center items-start gap-x-8 lg:gap-8">
              <div className="flex justify-center lg:justify-center flex-wrap w-full lg:flex w-1/3">
                <div className="w-full flex flex-wrap lg:flex-nowrap justify-center">
                  <h2 className="text-xl lg:text-4xl poppins-light w-full lg:w-auto text-center text-balance">
                    Sobre{" "}
                    <span className="poppins-bold">{detail.name}</span>
                  </h2>
                 
                </div>
                <div className="w-full flex justify-center">
                  <hr className="border-[#fbcc00] border-[1px] my-2 lg:my-6 w-1/2 lg:w-1/4" />
                </div>

                <p className="hidden lg:block text-lg poppins-light w-full lg:w-auto text-center lg:text-left text-balance">
                  Edificio de Departamentos
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal space-x-4 items-center">
                  <div className="flex flex-wrap">
                    <h1 className="poppins-regular text-xl lg:text-3xl text-gray-100 text-center lg:text-left w-full">
                      Ultimas{" "}
                      <span className="poppins-bold text-[#ffc702]">
                        unidades
                      </span>{" "}
                      de:
                    </h1>
                    {detail.rooms?.map((room) => (
                      <div className="text-white w-full flex flex-wrap justify-center items-center text-center lg:text-left">
                        <p
                          className={`w-full h-full text-md lg:text-2xl poppins-regular ${
                            !room.available ? "line-through" : ""
                          }`}
                        >
                          - {room.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {detail.sections &&
            detail.sections.map((section, index) => (
              <SectionCard key={index} section={section} index={index} />
            ))}

          <div>
            <GoogleMapEmbed
              address={detail.address}
              latitude={detail.latitude ? detail.latitude : ""}
              longitude={detail.longitude ? detail.longitude : ""}
            />
          </div>
          <div className="pb-10">
            <BlueprintsCarousel blueprints={detail ? detail.blueprints : ""} />
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Project;
