import React from "react";
import './GoogleMapEmbed.css'
const GoogleMapEmbed = ({lat, lng}) => {
  const apiKey = "AIzaSyBu-e2OBM1eyAudbRyVSa8spxztumlhlkc";
  const latitude = -26.826087806533767;
  const longitude = -65.29900985633185;
const embedUrl = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=${apiKey}`;

  return (
    <div className="w-full flex justify-center items-center py-10 pt-16">
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