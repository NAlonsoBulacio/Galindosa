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
import "./LandingPage.css";
const LandingPage = ({ match }) => {
  const [propertyData, setPropertyData] = useState(null);
  const propertyId = match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://galindo-strapi-app-90d40ac72895.herokuapp.com/api/properties/1?populate=*`
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
    cleanInfo.title[0] &&
    cleanInfo.title[0].children[0] &&
    cleanInfo.title[0].children[0].text;

  return (
    <div className="bg-black">
      <Header />
      <Title title={title ? title : ""} />
      <YoutubePlayer />
      <Calendly />
      <DescriptionAndPhotos />
      <AmenitiesContainer />
      <Slider />
      <Flyer />
      <Reviews />
      <QuestionsAnswers />
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default LandingPage;
