"use client"

import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Footer from "../../components/newComponents/Footer/Footer"
import Header from "../../components/newComponents/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import { emptyDetail, getProjects } from "../../redux/actions"
import "./Project.css"
import GoogleMapEmbed from "../../components/GoogleMapEmbed/GoogleMapEmbed"
import Amenities from "../../components/newComponents/Amenities/Amenities"
import BlueprintsCarousel from "../../components/newComponents/Blueprints/Blueprints"
import SectionCard from "../../components/SectionCard/SectionCard"
import ContactForm from "../../components/newComponents/ContactForm/ContactForm"
import Banner from "../../components/newComponents/Flyers/Banner/ProjectBanner"

const Project = ({ match }) => {
  const projectsR = useSelector((state) => state.projects)
  const projectSlug = match.params.slug
  const dispatch = useDispatch()
  const [detail, setDetail] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  useEffect(() => {
    const filteredProject = projectsR.find((p) => p.slug === projectSlug)
    setDetail(filteredProject)
  }, [projectSlug, projectsR])

  useEffect(() => {
    return () => {
      dispatch(emptyDetail())
    }
  }, [dispatch])

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen)
  }

  if (!detail) {
    return <div>Cargando...</div>
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
          content={`${detail.name}, Galindo SA, proyecto inmobiliario, ${detail.zone}, Tucumán, ${detail.rooms.map((room) => room.label).join(", ")}`}
        />
        <link rel="canonical" href={`https://www.galindosa.com/proyecto/${detail.slug}`} />
        <meta property="og:title" content={`${detail.name} | Proyecto Inmobiliario de Galindo SA en Tucumán`} />
        <meta
          property="og:description"
          content={`Descubre ${detail.name}, un proyecto inmobiliario de Galindo SA en ${detail.zone}, Tucumán. ${detail.introDescription}`}
        />
        <meta property="og:url" content={`https://www.galindosa.com/proyecto/${detail.slug}`} />
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
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
            <p onClick={toggleForm} className="text-gray-100 text-center text-lg poppins-regular cursor-pointer">
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
          <section className="w-full flex justify-center items-start bg-black text-white py-12 px-2 lg:px-0">
            {/* Project details */}
          </section>
          <section className="overflow-hidden">
            {detail.sections &&
              detail.sections.map((section, index) => <SectionCard key={index} section={section} index={index} />)}
          </section>
          <section className="flex flex-wrap py-4 lg:py-10 px-2 lg:px-32 ">{/* Project description */}</section>
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
  )
}

export default Project

