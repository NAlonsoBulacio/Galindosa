"use client";

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  if (!detail) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${detail.name} | Proyecto Inmobiliario de Galindo SA en Tucumán`}</title>
        <meta
          name="description"
          content={`Descubre ${detail.name}, un proyecto inmobiliario de Galindo SA en ${detail.zone}, Tucumán. ${detail.introDescription}`}
        />
        <meta
          name="keywords"
          content={`${detail.name}, Galindo SA, proyecto inmobiliario, ${
            detail.zone
          }, Tucumán, ${detail.rooms.map((room) => room.label).join(", ")}`}
        />
        <link
          rel="canonical"
          href={`https://www.galindosa.com/proyecto/${detail.slug}`}
        />
        <meta
          property="og:title"
          content={`${detail.name} | Proyecto Inmobiliario de Galindo SA en Tucumán`}
        />
        <meta
          property="og:description"
          content={`Descubre ${detail.name}, un proyecto inmobiliario de Galindo SA en ${detail.zone}, Tucumán. ${detail.introDescription}`}
        />
        <meta
          property="og:url"
          content={`https://www.galindosa.com/proyecto/${detail.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={detail.img} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: `${detail.name} - Galindo SA`,
            description: detail.description,
            image: detail.img,
            url: `https://www.galindosa.com/proyecto/${detail.slug}`,
            telephone: "+54-381-207-1244",
            address: {
              "@type": "PostalAddress",
              streetAddress: detail.address,
              addressLocality: "San Miguel de Tucumán",
              addressRegion: "Tucumán",
              postalCode: "4000",
              addressCountry: "AR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: detail.latitude,
              longitude: detail.longitude,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
          })}
        </script>
      </Helmet>
      <div className="mt-[80px] lg:mt-0">
        {detail.presentImages && detail.presentImages.length > 0 && (
          <Banner banners={detail.presentImages} name={detail.name} />
        )}
        <Header />
        <main>
          <div className="block lg:hidden bg-gray-900 py-4 border-b-[1px] border-b-[#ffc702]">
            <p
              onClick={toggleForm}
              className="text-gray-100 text-center text-sm lg:text-lg poppins-regular cursor-pointer"
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
          <section className="">
            <Amenities amenities={detail.amenities} />
          </section>
          <section className="w-full flex flex-col justify-start items-center bg-black text-white py-12 px-2 lg:px-0">
            {/* Video */}
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
            {/* Banner */}
            <div className="w-full flex flex-col  justify-start items-center bg-black text-white py-2 lg:py-12 px-2 lg:px-0">
              <div className="container flex-col  justify-start items-center">
                <div className="flex justify-center lg:justify-center flex-wrap w-full lg:flex w-1/3">
                  <div className="w-full flex flex-wrap lg:flex-nowrap justify-center">
                    <h2 className="text-xl lg:text-4xl poppins-light w-full lg:w-auto text-center text-balance">
                      Sobre <span className="poppins-bold">{detail.name}</span>
                    </h2>
                  </div>
                  <div className="w-full flex justify-center">
                    <hr className="border-[#fbcc00] border-[1px] my-2 lg:my-6 w-1/2 lg:w-1/4" />
                  </div>

                  <p className="hidden lg:block text-lg poppins-light w-full lg:w-auto text-center lg:text-left text-balance">
                    Edificio de Departamentos
                  </p>
                </div>
                <div className="w-full  flex justify-center text-center">
                  <div className="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-center  items-center">
                    <div className="flex flex-wrap">
                      <h1 className="poppins-regular text-xl lg:text-3xl text-gray-100 text-center lg:text-center w-full">
                        Ultimas{" "}
                        <span className="poppins-bold text-[#ffc702]">
                          unidades
                        </span>{" "}
                        de:
                      </h1>
                      {detail.rooms
                        ?.slice() // Crea una copia para no mutar el array original
                        .sort((a, b) => a.id - b.id) // Ordena por id de menor a mayor
                        .map((room) => (
                          <div
                            className="text-white w-full flex flex-wrap justify-center items-center text-center lg:text-center"
                            key={room.id} // Agrega una key única
                          >
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
          </section>
          <section className="overflow-hidden">
            {detail.sections &&
              detail.sections.map((section, index) => (
                <SectionCard key={index} section={section} index={index} />
              ))}
          </section>
          <section className="flex flex-wrap py-4 lg:py-10 px-2 lg:px-32 ">
            {/* Project description */}
          </section>
          <section>
            <GoogleMapEmbed
              project={true}
              address={detail.address}
              latitude={detail.latitude ? detail.latitude : ""}
              longitude={detail.longitude ? detail.longitude : ""}
            />
          </section>
          <section className="pb-10">
            <BlueprintsCarousel blueprints={detail ? detail.blueprints : ""} />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Project;
