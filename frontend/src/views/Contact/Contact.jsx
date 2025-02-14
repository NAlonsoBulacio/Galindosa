import { Helmet } from "react-helmet"
import Header from "../../components/newComponents/Header/Header"
import DescriptionContact from "../../components/newComponents/DescrptionContact/DescriptionContact"
import Footer from "../../components/newComponents/Footer/Footer"
import FlyerContact from "../../components/newComponents/Flyers/FlyerContact"
import GoogleMapEmbed from "../../components/GoogleMapEmbed/GoogleMapEmbed"

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contacto - Galindo SA | Constructora Líder en Tucumán</title>
        <meta
          name="description"
          content="Contáctanos para obtener más información sobre nuestros proyectos inmobiliarios en Tucumán. Galindo SA, tu socio confiable en inversiones inmobiliarias desde 1975."
        />
        <meta
          name="keywords"
          content="contacto, Galindo SA, constructora, Tucumán, asesoramiento inmobiliario, inversiones"
        />
        <link rel="canonical" href="https://www.galindosa.com/contacto" />
        <meta property="og:title" content="Contacto - Galindo SA | Constructora Líder en Tucumán" />
        <meta
          property="og:description"
          content="Ponte en contacto con Galindo SA para asesoramiento sobre nuestros proyectos inmobiliarios en Tucumán."
        />
        <meta property="og:url" content="https://www.galindosa.com/contacto" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto Galindo SA",
            url: "https://www.galindosa.com/contacto",
            mainEntity: {
              "@type": "Organization",
              name: "Galindo SA",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54-381-207-1244",
                contactType: "customer service",
                email: "info@galindosa.com.ar",
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
            },
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <FlyerContact />
        <section className="px-2 lg:px-10 xl:px-20">
          <DescriptionContact />
        </section>
        <section>
          <GoogleMapEmbed latitude={"-26.822964796757244"} longitude={"-65.19955461070677"} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact

