import React from 'react';
import interior from '../assets/interior.jpg';
import { Link } from 'react-router-dom';

const Hhero = () => {
  return (
    <div className="relative bg-gray-900 h-screen z-0 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${interior})`, // Use the imported image here
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Find the Perfect Property for Your Lifestyle
        </h1>
        <p className="text-lg mb-8">
          Discover Your Dream Home with Us
        </p>
        <Link to="/service">
        
        <button  className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-400 transition-all">
          Start Searching
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hhero;
