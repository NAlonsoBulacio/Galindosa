import React from 'react'
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import YoutubePlayer from "../../components/YoutubePlayer/YoutubePlayer";
import AmenitiesContainer from '../../components/AmenitiesContainer/AmenitiesContainer';
import DescriptionAndPhotos from '../../components/DescriptionAndPhotos/DescriptionAndPhotos';
import QuestionsAnswers from '../../components/QuestionsAnswers/QuestionsAnswers';
import Flyer from '../../components/Flyer/Flyer';
import Reviews from '../../components/Reviews/Reviews';
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className='bg-gray-100'>
        <Header />
        <Title />
        <YoutubePlayer />
        <AmenitiesContainer />
        <DescriptionAndPhotos />
        <Flyer />
        <Reviews />
        <QuestionsAnswers />
    </div>
  )
}

export default LandingPage
