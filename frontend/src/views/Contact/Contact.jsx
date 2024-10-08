import React from "react";
import Header from "../../components/newComponents/Header/Header";
import DescriptionContact from "../../components/newComponents/DescrptionContact/DescriptionContact";
import Footer from "../../components/newComponents/Footer/Footer";
import FlyerContact from "../../components/newComponents/Flyers/FlyerContact";
import GoogleMapEmbed from "../../components/GoogleMapEmbed/GoogleMapEmbed";

const Contact = () => {
  return (
    <div>
      <Header />
      <FlyerContact />
      <div className="px-2 lg:px-10 xl:px-20">
        <DescriptionContact />
      </div>
      <GoogleMapEmbed />

      <Footer />
    </div>
  );
};

export default Contact;
