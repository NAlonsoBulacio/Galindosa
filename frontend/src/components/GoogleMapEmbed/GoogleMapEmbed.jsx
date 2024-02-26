import React from "react";
import "./GoogleMapEmbed.css";
const GoogleMapEmbed = ({ lat, lng }) => {
  const apiKey = "AIzaSyBu-e2OBM1eyAudbRyVSa8spxztumlhlkc";
  const latitude = -26.826087806533767;
  const longitude = -65.29900985633185;
  const embedUrl = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=${apiKey}`;

  return (
    <div className="w-full flex flex-wrap justify-center items-center py-10 pt-16 gap-y-6">
      <div className="w-full flex flex-wrap justify-center items-center ">
        <h1 className="text-4xl lg:text-5xl text-center font-plus-600 text-gray-200">
          Ubicación Privilegiada
        </h1>
      </div>
      <iframe
        className="mapa"
        title="Google Map"
        frameBorder="0"
        style={{ border: 0 }}
        src={embedUrl}
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMapEmbed;
