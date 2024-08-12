import React from "react";
import Header from "../../components/newComponents/Header/Header";
import Footer from "../../components/newComponents/Footer/Footer";
import FlyerAboutUs from "../../components/newComponents/Flyers/FlyerAboutUs";
import AboutHome from "../../components/newComponents/AboutHome/AboutHome";
import CEOMessage from "../../components/newComponents/CEOMessage/CEOMessage";
import AboutUsCounter from "../../components/newComponents/AboutUsCounter/AboutUsCounter";
import JoinUs from "../../components/newComponents/JoinUs/JoinUs";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <FlyerAboutUs />
      <div className="px-2">
      <AboutHome />
      </div>

      <CEOMessage />
      <div className="px-2 bg-gray-100">
      <AboutUsCounter />
      </div>
      <JoinUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
