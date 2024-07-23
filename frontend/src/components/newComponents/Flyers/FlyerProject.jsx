import React from "react";
import ContactForm from "../ContactForm/ContactForm";
// import { banner, banner2 } from "../../../assets";
const FlyerProject = ({banner}) => {
  return (
    <div className="w-full flex flex-wrap justify-end items-center relative h-[40vh] lg:h-[100vh]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://grupoproaco.com/images/headers/company.jpg)`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div
        className="absolute block lg:hidden inset-0 z-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "100% 100%",
          backgroundSize: "cover",
        }}
      ></div>
    <div className=" z-10 mx-8 flex justify-center items-center">
        <ContactForm />
      </div>
      
    </div>
  );
};

export default FlyerProject;
