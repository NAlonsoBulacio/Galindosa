import React from "react";
import Header from "../../components/newComponents/Header/Header";
import video from "../../assets/video.mp4";
import Counter from "../../components/Counter/Counter";
import Filter from "../../components/newComponents/Filter/Filter";
import { IoIosContacts } from "react-icons/io";
import FeaturedProperties from "../../components/newComponents/FeaturedProperties/FeaturedProperties";
import CategoryCarousel from "../../components/newComponents/CategoryCarousel/CategoryCarousel";
import AboutHome from "../../components/newComponents/AboutHome/AboutHome";
import NewsCards from "../../components/newComponents/NewsCards/NewsCards";
import Footer from "../../components/newComponents/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="relative w-screen h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
          <h1 className="text-white text-4xl md:text-6xl poppins-semibold text-center">
            La constructora N°1 de Tucumán
          </h1>
          <div>
            <a
              href="/"
              className="tracking-widest poppins-regular bg-[#fbcc00] hover:bg-[#a18c2d] duration-300 text-white px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 mt-8"
            >
       
              SOLICITAR ASESOR <IoIosContacts className="text-3xl" />
            </a>
          </div>
          <div className="mt-8 w-full flex justify-center">
            <Filter />
          </div>
        </div>
      </div>
      <Counter />
      <FeaturedProperties />
      <CategoryCarousel />
      <AboutHome />
      <NewsCards />
      <Footer />
    </div>
  );
};

export default Home;
