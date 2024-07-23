import React from 'react';
import videoSource from '../../../assets/video.mp4'; 

const AboutHome = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-start justify-center bg-white py-10 md:p-16 lg:px-32">
      <div className="md:w-1/2 pr-0 md:pr-8">
        <h3 className="text-[#ccad24] poppins-semibold text-xl mb-4 tracking-widest">DESARROLLAMOS TENDENCIA</h3>
        <h2 className="text-3xl text-gray-700 poppins-bold mb-4">
          Somos un grupo desarrollista líder en Argentina
        </h2>
        <p className="text-lg mb-4 poppins-light">
          <strong className='poppins-semibold'>
            Somos un grupo desarrollista líder en Argentina que avanza construyendo productos de excelente calidad con los más altos estándares de cumplimiento del mercado.
          </strong>{' '}
          Elegimos cuidadosamente la tierra, nos aliamos con los mejores profesionales para diseñar proyectos que se vuelven tendencias y gestionamos la construcción, la comercialización y la financiación de todos nuestros productos.
        </p>
        <p className="text-[#ccad24] text-lg poppins-regular">#DesarrollamosTendencia</p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 relative z-10">
        <video className="w-full h-auto" controls loop>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-no-repeat bg-right" style={{ backgroundImage: `url('https://grupoproaco.com/images/bg-02.png?10109105914205d55b8882e7adfc31cf')` }}></div>
    </div>
  );
};

export default AboutHome;
