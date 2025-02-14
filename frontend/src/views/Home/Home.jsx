import React, { Suspense } from "react"
import { Helmet } from "react-helmet"
import Header from "../../components/newComponents/Header/Header"
import video from "../../assets/video.mp4"
import Counter from "../../components/Counter/Counter"
import Filter from "../../components/newComponents/Filter/Filter"
import { IoIosContacts } from "react-icons/io"
import FeaturedProperties from "../../components/newComponents/FeaturedProperties/FeaturedProperties"
import NewsCards from "../../components/newComponents/NewsCards/NewsCards"
import Footer from "../../components/newComponents/Footer/Footer"
const AboutHome = React.lazy(() => import("../../components/newComponents/AboutHome/AboutHome"))

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Helmet>
        <title>Galindo SA - La Constructora N°1 de Tucumán | Propiedades y Desarrollos Inmobiliarios</title>
        <meta
          name="description"
          content="Galindo SA, la constructora líder en Tucumán. Descubre nuestros proyectos inmobiliarios, departamentos y propiedades en las mejores zonas. Calidad y confianza desde 1975."
        />
        <meta
          name="keywords"
          content="Galindo SA, constructora, Tucumán, propiedades, desarrollos inmobiliarios, departamentos, inversión"
        />
        <link rel="canonical" href="https://www.galindosa.com/" />
        <meta property="og:title" content="Galindo SA - La Constructora N°1 de Tucumán" />
        <meta
          property="og:description"
          content="Descubre los mejores proyectos inmobiliarios y propiedades en Tucumán con Galindo SA. Calidad y confianza desde 1975."
        />
        <meta property="og:url" content="https://www.galindosa.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Galindo SA",
            url: "https://www.galindosa.com",
            logo: "https://www.galindosa.com/logo.png",
            sameAs: ["https://www.facebook.com/galindosatucuman", "https://www.instagram.com/galindosa_tuc"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+54-381-207-1244",
              contactType: "customer service",
              areaServed: "AR",
              availableLanguage: "Spanish",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Virgen de la Merced 639",
              addressLocality: "San Miguel de Tucumán",
              addressRegion: "Tucumán",
              postalCode: "4000",
              addressCountry: "AR",
            },
          })}
        </script>
      </Helmet>

      <Header />

      <section className="relative w-screen h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <header className="absolute inset-0 flex flex-col items-center justify-center pt-20">
          <h1 className="text-white text-4xl md:text-6xl poppins-semibold text-center">
            La constructora N°1 de Tucumán
          </h1>
          <nav>
            <a
              href="/contacto"
              className="tracking-widest poppins-regular bg-[#ffc702] hover:bg-[#a18c2d] duration-300 text-white px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 mt-8"
            >
              SOLICITAR ASESOR <IoIosContacts className="text-3xl" />
            </a>
          </nav>
          <div className="mt-8 w-full flex justify-center">
            <Filter />
          </div>
        </header>
      </section>

      <section className="px-2">
        <Counter />
      </section>

      <section className="px-2">
        <FeaturedProperties />
      </section>

      <section className="px-2">
        <Suspense fallback={<div>Cargando...</div>}>
          <AboutHome />
        </Suspense>
      </section>

      <section className="px-2">
        <NewsCards />
      </section>

      <Footer />
    </main>
  )
}

export default Home

