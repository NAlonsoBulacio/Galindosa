import React from "react";
import "./GoogleMapEmbed.css";
const GoogleMapEmbed = ({ latitud, longitud, address }) => {
  const apiKey = "AIzaSyBu-e2OBM1eyAudbRyVSa8spxztumlhlkc";
  const latitude = parseFloat(latitud);
  const longitude =  parseFloat(longitud);
  const embedUrl = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=${apiKey}`;

  return (
    <div className="w-full flex flex-wrap justify-center items-center py-10 pt-16 gap-y-6">
      <div className="w-full flex flex-wrap justify-center items-center ">
        <h1 className="text-4xl text-center poppins-regular text-gray-700">
          Ubicación del Proyecto
        </h1>
        <p className="w-full text-center">{address}</p>
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
