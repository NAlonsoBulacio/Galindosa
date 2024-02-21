import React from "react";
import YouTube from "react-youtube";
import "./YoutubePlayer.css";
const YoutubePlayer = ({}) => {
  const opts = {
    height: "360",
    width: "100%",
    playerVars: {},
  };
  const videoId = "9YD7O4M75II";
  return (
    <div className="w-full flex justify-center">
      <div className="youtube-div">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default YoutubePlayer;
