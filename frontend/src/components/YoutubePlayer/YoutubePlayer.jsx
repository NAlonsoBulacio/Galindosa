// import React, { useState } from "react";
// import YouTube from "react-youtube";
// import Registro2 from "../Registro/Registro2";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./YoutubePlayer.css";
// const YoutubePlayer = ({ youtube_url }) => {
//   const [showForm, setShowform] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);
//   const handleShowForm = (estado) => {
//     setShowform(estado);
//   };
//   const actualizarEstadoPadre = (estado) => {
//     if (estado === true) {
//       setShowVideo(true);
//       toast.success("¡Mensaje enviado exitosamente!");
//     }
//   };
//   const handleClick = (click) => {
//     window.fbq("trackCustom", "VideoClicked");
//     setShowform(click);
//   };

//   const handleVideoStart = () => {
//     window.fbq("trackCustom", "VideoViewed");
//   };
//   const opts = {
//     height: "360",
//     width: "100%",
//     playerVars: {},
//   };
//   const videoId = youtube_url;
//   return (
//     <div className="w-full flex justify-center px-4">
//       <div className="youtube-div relative">
//         <YouTube
//           videoId={videoId}
//           opts={opts}
//           onStateChange={(event) => {
//             if (event.data === window.YT.PlayerState.PLAYING) {
//               handleVideoStart();
//             }
//           }}
//         />
//       </div>
//       {showForm && (
//         <>
//           <div
//             className="fixed inset-0 bg-gray-800 opacity-50 z-40"
//             onClick={() => handleClick(false)}
//           ></div>
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="bg-white p-4 rounded-lg shadow-lg">
//               <Registro2
//                 actualizarEstado={actualizarEstadoPadre}
//                 handleShowForm={handleShowForm}
//               />
//             </div>
//           </div>
//         </>
//       )}
//       {showVideo === false ? (
//         <div
//           className="absolute youtube-div z-30 bg-transparent cursor-pointer"
//           onClick={() => setShowform(true)}
//         ></div>
//       ) : (
//         ""
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default YoutubePlayer;
