import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import YoutubePlayer from "../../components/YoutubePlayer/YoutubePlayer";
import AmenitiesContainer from "../../components/AmenitiesContainer/AmenitiesContainer";
import DescriptionAndPhotos from "../../components/DescriptionAndPhotos/DescriptionAndPhotos";
import QuestionsAnswers from "../../components/QuestionsAnswers/QuestionsAnswers";
import Flyer from "../../components/Flyer/Flyer";
import Reviews from "../../components/Reviews/Reviews";
import Calendly from "../../components/Calendly/Calendly";
import Footer from "../../components/Footer/Footer";
import WhatsappButton from "../../components/Whatsapp/WhatsappButton";
import Slider from "../../components/Slider/Slider";
import ChatImages from "../../components/ChatImages/ChatImages";
import "./LandingPage.css";
const LandingPage = ({ match }) => {
  const [propertyData, setPropertyData] = useState(null);
  const propertyId = match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:1337/api/propiedades/${propertyId}?populate=*`
          `https://galindo-strapi-app-90d40ac72895.herokuapp.com/api/propiedades/${propertyId}?populate=*`
        );
        setPropertyData(response.data);
      } catch (error) {
        console.error("Error fetching property data: ", error);
      }
    };

    fetchData();
  }, [propertyId]);

  const cleanInfo =
    propertyData && propertyData.data && propertyData.data.attributes;

  const title =
    cleanInfo &&
    cleanInfo.titulo[0] &&
    cleanInfo.titulo[0].children[0] &&
    cleanInfo.titulo[0].children[0].text;

  const subtitle =
    cleanInfo &&
    cleanInfo.subtitulo

  const youtube_url = cleanInfo && cleanInfo.youtube_url;
  const latitud = cleanInfo && cleanInfo.latitud;
  const longitud = cleanInfo && cleanInfo.longitud;
  const titulo_detalles = cleanInfo && cleanInfo.titulo_detalles;
  const titulo_amenidades = cleanInfo && cleanInfo.titulo_amenidades;
  const subtitulo_amenidades = cleanInfo && cleanInfo.subtitulo_amenidades;

  const prueba_descripciones = cleanInfo && cleanInfo.descripciones;
  const textosDeDescripciones = [];
  prueba_descripciones?.map((desc) => {
    textosDeDescripciones.push(desc.children[0]);
  });

  const items = cleanInfo && cleanInfo.descripciones_items;
  const textosDeItemsDescripciones = [];
  items?.map((desc) => {
    textosDeItemsDescripciones.push(desc.children[0]);
  });

  const questions_answers = cleanInfo && cleanInfo.preguntas_respuestas;
  const textosDeQA = [];
  questions_answers?.map((qa) => {
    textosDeQA.push(qa.children[0]);
  });


  const propertiesImgs =
    cleanInfo && cleanInfo.fotos_propiedad && cleanInfo.fotos_propiedad.data;
  const urls = propertiesImgs?.map((prop) => prop.attributes.url);
  const images = urls?.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  const amenities =
    cleanInfo && cleanInfo.amenidades && cleanInfo.amenidades.data;
  const allDetails = cleanInfo && cleanInfo.detalles && cleanInfo.detalles.data;

  const details = allDetails?.map((det) => ({
    title: det.attributes.caption,
    img: det.attributes.url,
  }));

  return (
    <div className="bg-black">
      <Header />
      <Title 
      title={title ? title : ""} 
      subtitle={subtitle ? subtitle : ""} 
      />
      <YoutubePlayer youtube_url={youtube_url ? youtube_url : ""} />
      <Calendly />
      <DescriptionAndPhotos
        descripciones={textosDeDescripciones ? textosDeDescripciones : ""}
        descripcionesItems={textosDeItemsDescripciones ? textosDeItemsDescripciones : ""}
        descripcion={titulo_detalles ? titulo_detalles : ""}
        images={images ? images : ""}
      />
      <AmenitiesContainer
      subtitulo_amenidades={subtitulo_amenidades ? subtitulo_amenidades : ""}
        amenities={amenities ? amenities : ""}
        titulo_amenidades={titulo_amenidades ? titulo_amenidades : ""}
      />
      <Slider
        details={details ? details : ""}
        titulo_detalles={titulo_detalles ? titulo_detalles : ""}
        latitud={latitud ? latitud : ""}
        longitud={longitud ? longitud : ""}
      />
      <Flyer />
      <ChatImages />
      <QuestionsAnswers 
      textosDeQA={textosDeQA ? textosDeQA : ""} 
      />

      <Footer />
    </div>
  );
};

export default LandingPage;
