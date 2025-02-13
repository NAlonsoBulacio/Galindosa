import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/newComponents/Header/Header";
import Footer from "../../components/newComponents/Footer/Footer";
import FlyerAboutUs from "../../components/newComponents/Flyers/FlyerAboutUs";
import AboutHome from "../../components/newComponents/AboutHome/AboutHome";
import CEOMessage from "../../components/newComponents/CEOMessage/CEOMessage";
import AboutUsCounter from "../../components/newComponents/AboutUsCounter/AboutUsCounter";
import JoinUs from "../../components/newComponents/JoinUs/JoinUs";
const AboutUs = () => {
  return (
    <div>
      {/* Meta tags and structured data for SEO */}
      <Helmet>
        <title>Contacto - La Constructora N°1 de Tucumán - Galindo SA</title>
        <meta name="description" content="Todo sobre Galindo SA, la constructora líder en Tucumán." />
        <meta name="keywords" content="sobre nosotros, edificios, hormigón, constructora, Tucumán, Galindo SA" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutUsPage",
            "name": "Sobre Nosotros Galindo SA",
            "url": "https://www.galindosa.com/contacto",
            "mainEntity": {
              "@type": "Organization",
              "name": "Sobre Nosotros | Galindo SA",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54 9 381 555 5555",
                "contactType": "Customer Service",
                "areaServed": "AR",
                "availableLanguage": "Spanish"
              }
            }
          })}
        </script>
      </Helmet>
      <Header />
      <FlyerAboutUs />
      <div className="px-2">
      <AboutHome />
      </div>

      {/* <CEOMessage /> */}
      <div className="px-2 bg-gray-100">
      <AboutUsCounter />
      </div>
      <JoinUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
