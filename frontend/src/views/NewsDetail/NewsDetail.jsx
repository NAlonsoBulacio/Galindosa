"use client"

import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { IoIosArrowBack } from "react-icons/io"
import { Link, useParams } from "react-router-dom"
import { newsData } from "../../utils/newsData"
import Header from "../../components/newComponents/Header/Header"
import Footer from "../../components/newComponents/Footer/Footer"
import FlyerAboutUs from "../../components/newComponents/Flyers/FlyerAboutUs"

const NewsDetail = () => {
  const { slug } = useParams()
  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundNews = newsData.find((item) => item.slug === slug)
    setNews(foundNews)
    setLoading(false)
  }, [slug])

  if (loading) {
    return <p>Cargando...</p>
  }

  if (!news) {
    return (
      <>
        <Header />
        <FlyerAboutUs />
        <main>
          <p>Noticia no encontrada</p>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{`${news.title} | Noticias Galindo SA`}</title>
        <meta name="description" content={news.fullText.substring(0, 160)} />
        <meta name="keywords" content={`${news.category}, Galindo SA, noticias inmobiliarias, Tucumán`} />
        <link rel="canonical" href={`https://www.galindosa.com/novedades/${news.slug}`} />
        <meta property="og:title" content={`${news.title} | Noticias Galindo SA`} />
        <meta property="og:description" content={news.fullText.substring(0, 160)} />
        <meta property="og:url" content={`https://www.galindosa.com/novedades/${news.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={news.image} />
      </Helmet>

      <Header />
      <FlyerAboutUs />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link to="/novedades" className="flex items-center text-blue-500">
            <IoIosArrowBack className="mr-2" /> Volver a noticias
          </Link>
        </nav>

        <article>
          <header className="mb-8">
            <img
              src={news.image || "/placeholder.svg"}
              alt={news.title}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <time dateTime={news.date} className="text-gray-500">
                {news.date}
              </time>
              <span className="bg-black text-white text-sm px-2 py-1 rounded">{news.category}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
          </header>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700">{news.fullText}</p>
            <div dangerouslySetInnerHTML={{ __html: news.additionalContent }} />
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}

export default NewsDetail

