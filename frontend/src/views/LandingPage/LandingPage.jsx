import React, { useState } from "react";
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
const LandingPage = () => {
  return (
    <div className="bg-black">
      <Header />
      <Title />
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
