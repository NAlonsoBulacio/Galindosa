import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/newComponents/Header/Header";
import video from "../../assets/video.mp4";
import Counter from "../../components/Counter/Counter";
import Filter from "../../components/newComponents/Filter/Filter";
import { IoIosContacts } from "react-icons/io";
import FeaturedProperties from "../../components/newComponents/FeaturedProperties/FeaturedProperties";
import AboutHome from "../../components/newComponents/AboutHome/AboutHome";
import NewsCards from "../../components/newComponents/NewsCards/NewsCards";
import Footer from "../../components/newComponents/Footer/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Meta tags and structured data for SEO */}
      <Helmet>
        <title>La Constructora N°1 de Tucumán - Galindo SA</title>
        <meta name="description" content="Galindo SA es la constructora líder en Tucumán, ofreciendo propiedades destacadas y servicios de alta calidad." />
        <meta name="keywords" content="constructora, Tucumán, propiedades, Galindo SA" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Galindo SA",
            "url": "https://www.galindosa.com",
            "logo": "https://www.galindosa.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "areaServed": "AR",
              "availableLanguage": "Spanish"
            },
            "sameAs": [
              "https://www.facebook.com/GalindoSA",
              "https://www.instagram.com/GalindoSA"
            ]
          })}
        </script>
      </Helmet>

      {/* Header Component */}
      <Header />

      {/* Hero Section with Video */}
      <div className="relative w-screen h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata" // Carga solo los metadatos del video inicialmente
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
          <h1 className="text-white text-4xl md:text-6xl poppins-semibold text-center">
            La constructora N°1 de Tucumán
          </h1>
          <div>
            <a
              href="/contacto"
              className="tracking-widest poppins-regular bg-[#ffc702] hover:bg-[#a18c2d] duration-300 text-white px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 mt-8"
            >
              SOLICITAR ASESOR <IoIosContacts className="text-3xl" />
            </a>
          </div>
          <div className="mt-8 w-full flex justify-center">
            <Filter />
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="px-2">
        <Counter />
        <FeaturedProperties />
      </div>

      <div className="px-2">
        <AboutHome />
        <NewsCards />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
