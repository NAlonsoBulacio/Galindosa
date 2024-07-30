import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

const JoinUs = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <h2 className="text-center text-2xl lg:text-4xl poppins-regular mb-4">
        Si querés formar parte de <span className="poppins-extrabold">nuestro staff</span> envianos tu Curriculum.
      </h2>
      <div className="flex justify-center">
        <a href="mailto:.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2">
          <HiOutlineMail className="text-2xl" /> seleccion@galindosa.com
        </a>
      </div>
    </div>
  );
};

export default JoinUs;
