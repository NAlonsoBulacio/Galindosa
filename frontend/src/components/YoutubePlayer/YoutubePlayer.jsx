import React, { useState } from "react";
import YouTube from "react-youtube";
import Registro from "../Registro/Registro";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./YoutubePlayer.css";
const YoutubePlayer = ({}) => {

  const [showForm, setShowform] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const actualizarEstadoPadre = (estado) => {
    setShowform(estado);
    setShowVideo(true);
    toast.success("¡Mensaje enviado exitosamente!");
  };
  const handleClick = (click) => {
    setShowform(click);
  };

  const opts = {
    height: "360",
    width: "100%",
    playerVars: {},
  };
  const videoId = "9YD7O4M75II";
  return (
    <div className="w-full flex justify-center px-4">
      <div className="youtube-div relative">
        <YouTube videoId={videoId} opts={opts} />
      </div>
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => handleClick(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Registro
                actualizarEstado={actualizarEstadoPadre}
              />
            </div>
          </div>
        </>
      )}
      { showVideo === false ? (<div className="absolute youtube-div z-30 bg-transparent cursor-pointer" onClick={() => setShowform(true)}></div>) : ""}
      <ToastContainer />
    </div>
  );
};

export default YoutubePlayer;
