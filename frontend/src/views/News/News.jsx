import { Helmet } from "react-helmet"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../../components/newComponents/Footer/Footer"
import Header from "../../components/newComponents/Header/Header"
import FlyerNews from "../../components/newComponents/Flyers/FlyerNews"
import NewsCard from "../../components/newComponents/NewsCard/NewsCard"
import NewsDetail from "../NewsDetail/NewsDetail"
import { newsData } from "../../utils/newsData"

const News = () => {
  return (
    <Router>
      <Helmet>
        <title>Noticias y Novedades | Galindo SA</title>
        <meta
          name="description"
          content="Mantente informado sobre las últimas noticias y novedades del sector inmobiliario en Tucumán con Galindo SA."
        />
        <meta
          name="keywords"
          content="noticias inmobiliarias, novedades construcción, Galindo SA, Tucumán, sector inmobiliario"
        />
        <link rel="canonical" href="https://www.galindosa.com/novedades" />
        <meta property="og:title" content="Noticias y Novedades | Galindo SA" />
        <meta
          property="og:description"
          content="Descubre las últimas noticias y novedades del sector inmobiliario en Tucumán con Galindo SA."
        />
        <meta property="og:url" content="https://www.galindosa.com/novedades" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <FlyerNews />

      <main>
        <Switch>
          <Route exact path="/novedades">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 py-12">
              <h1 className="sr-only">Noticias y Novedades de Galindo SA</h1>
              {newsData.map((news, index) => (
                <article key={index}>
                  <NewsCard news={news} />
                </article>
              ))}
            </section>
          </Route>
          <Route path="/novedades/:slug">
            <NewsDetail newsData={newsData} />
          </Route>
        </Switch>
      </main>

      <Footer />
    </Router>
  )
}

export default News

