import React from "react";
import Footer from "../../components/newComponents/Footer/Footer";
import Header from "../../components/newComponents/Header/Header";
import FlyerNews from "../../components/newComponents/Flyers/FlyerNews";
import NewsCard from "../../components/newComponents/NewsCard/NewsCard";
import NewsDetail from "../NewsDetail/NewsDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const newsData = [
  {
    image: "https://grupoproaco.com/img/785a4ffa-0850-454b-90de-b18e91097dae/JFNash_Galeria02.jpg?q=80&fit=max&crop=1199%2C675%2C0%2C0",
    category: "DESARROLLISMO",
    date: "12 julio, 2024",
    title:
      "Apertura de reservas de bancos para el Ciclo Lectivo 2025 en el Instituto JF Nash",
    fullText:
      "Nos complace anunciar la apertura de reservas de banco para el ciclo lectivo 2025 en el Instituto JF Nash, ubicado en la Manzana 113, Lote 1 de Docta Central (Docta Urbanización Inteligente, Córdoba, Argentina).",
    slug: "apertura-reservas-bancos-2025",
    link: "/novedades/apertura-reservas-bancos-2025",
  },
  {
    image: "https://grupoproaco.com/img/21fdcc51-14b5-419a-aeff-68c960437b6e/Copiade02062024-DSC03463.jpg?q=80&fit=max&crop=5851%2C3910%2C0%2C0",
    category: "EVENTOS",
    date: "Junio 2024",
    title: "Un éxito: ¡CASA FOA Pocito recibió más de 50 mil visitantes!",
    fullText:
      "La reciente edición de Casa FOA, celebrada en el innovador emprendimiento Pocito Social Life de Grupo Proaco, fue un rotundo éxito que sorprendió a toda Córdoba. Con una asistencia de más de 50 mil personas, esta muestra de arquitectura, decoración y diseño se consolidó como un evento imperdible en la ciudad.",
    slug: "casa-foa-pocito-exito",
    link: "/novedades/casa-foa-pocito-exito",
  },
  // Agrega más noticias según sea necesario
];

const News = () => {
  return (
    <Router>
      <Header />
      <FlyerNews />
      <Switch>
        <Route exact path="/novedades">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 py-12">
            {newsData.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
          </div>
        </Route>
        <Route path="/novedades/:slug">
          <NewsDetail newsData={newsData} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default News;
