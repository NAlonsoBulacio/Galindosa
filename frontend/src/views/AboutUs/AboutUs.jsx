import { Helmet } from "react-helmet"
import Header from "../../components/newComponents/Header/Header"
import Footer from "../../components/newComponents/Footer/Footer"
import FlyerAboutUs from "../../components/newComponents/Flyers/FlyerAboutUs"
import AboutHome from "../../components/newComponents/AboutHome/AboutHome"
import AboutUsCounter from "../../components/newComponents/AboutUsCounter/AboutUsCounter"
import JoinUs from "../../components/newComponents/JoinUs/JoinUs"

const AboutUs = () => {
  return (
    <main>
      <Helmet>
        <title>Sobre Nosotros - Galindo SA | Constructora Líder en Tucumán desde 1975</title>
        <meta
          name="description"
          content="Conoce la historia y trayectoria de Galindo SA, la constructora líder en Tucumán desde 1975. Descubre nuestro compromiso con la calidad y la innovación en el sector inmobiliario."
        />
        <meta
          name="keywords"
          content="Galindo SA, constructora, Tucumán, historia, trayectoria, calidad, innovación, sector inmobiliario"
        />
        <link rel="canonical" href="https://www.galindosa.com/sobre-nosotros" />
        <meta property="og:title" content="Sobre Nosotros - Galindo SA | Constructora Líder en Tucumán desde 1975" />
        <meta
          property="og:description"
          content="Conoce la historia y trayectoria de Galindo SA, la constructora líder en Tucumán desde 1975. Más de 45 años de experiencia en el sector inmobiliario."
        />
        <meta property="og:url" content="https://www.galindosa.com/sobre-nosotros" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Sobre Nosotros - Galindo SA",
            url: "https://www.galindosa.com/sobre-nosotros",
            mainEntity: {
              "@type": "Organization",
              name: "Galindo SA",
              foundingDate: "1975",
              description:
                "Galindo SA es la constructora líder en Tucumán, con más de 45 años de experiencia en el sector inmobiliario. Nos destacamos por nuestro compromiso con la calidad y la innovación en cada proyecto.",
              url: "https://www.galindosa.com",
              logo: "https://www.galindosa.com/logo.png",
              sameAs: ["https://www.facebook.com/galindosatucuman", "https://www.instagram.com/galindosa_tuc"],
            },
          })}
        </script>
      </Helmet>
      <Header />
      <FlyerAboutUs />
      <section className="px-2">
        <article>
          <AboutHome />
        </article>
      </section>
      <section className="px-2 bg-gray-100">
        <AboutUsCounter />
      </section>
      <section>
        <JoinUs />
      </section>
      <Footer />
    </main>
  )
}

export default AboutUs

