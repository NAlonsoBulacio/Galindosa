import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/newComponents/Header/Header";
import DescriptionContact from "../../components/newComponents/DescrptionContact/DescriptionContact";
import Footer from "../../components/newComponents/Footer/Footer";
import FlyerContact from "../../components/newComponents/Flyers/FlyerContact";
import GoogleMapEmbed from "../../components/GoogleMapEmbed/GoogleMapEmbed";

const Contact = () => {
  return (
    <div>
      {/* Meta tags and structured data for SEO */}
      <Helmet>
        <title>Contacto - La Constructora N°1 de Tucumán - Galindo SA</title>
        <meta name="description" content="Ponte en contacto con Galindo SA, la constructora líder en Tucumán. Estamos aquí para ayudarte con tus necesidades de construcción." />
        <meta name="keywords" content="contacto, constructora, Tucumán, Galindo SA" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto Galindo SA",
            "url": "https://www.galindosa.com/contacto",
            "mainEntity": {
              "@type": "Organization",
              "name": "Contacto | Galindo SA",
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
      <FlyerContact />
      <div className="px-2 lg:px-10 xl:px-20">
        <DescriptionContact />
      </div>
      <GoogleMapEmbed latitude={"-26.822964796757244"} longitude={"-65.19955461070677"}/>
      <Footer />
    </div>
  );
};

export default Contact;
