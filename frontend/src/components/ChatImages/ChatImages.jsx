import React from "react";
import chat1 from "../../assets/chats/chat1r.png";
import chat2 from "../../assets/chats/chat2r.png";
import chat3 from "../../assets/chats/chat3r.png";
import chat4 from "../../assets/chats/chat4r.png";
const ChatImages = () => {
  const chatImages = [chat1, chat2, chat3, chat4];
  return (
    <div className="flex flex-wrap justify-center items-center space-y-10 px-4 py-8 lg:px-14 xl:px-20">
      <div className="w-full flex flex-wrap justify-center">
        <h1
          className="w-full text-center   font-plus-600 text-xl lg:text-2xl"
          style={{ color: "#f5c90f" }}
        >
          Personas reales, resultados reales
        </h1>
        <p className="w-full text-center  font-plus-600 text-gray-200 text-4xl lg:text-4xl">
          Lo que opinan nuestros clientes.
        </p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center space-y-2">
        <div className="w-full flex lg:hidden justify-center">
          <h1 className="text-gray-600 text-lg">
            Scroll para ver sus opiniones
          </h1>
        </div>
        <div className="lg:hidden px-[3px] lg:px-0 h-auto overflow-y-auto lg:h-auto w-full grid grid-cols-1 gap-4 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-6">
          {chatImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Chat ${index}`}
                className="w-full h-auto border-2 border-gray-300 rounded-xl"
              />
          ))}
        </div>
        <div className="hidden lg:block gap-4 lg:gap-4 sm:columns-2 lg:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-6">
          {chatImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Chat ${index}`}
                className="w-full h-auto border-2 border-gray-300 rounded-xl"
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatImages;
