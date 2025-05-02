import React from 'react';
import Typed from 'react-typed';
import myphoto from '../assets/myphoto.png'; // ✅ your photo path

const Hero = () => {
  return (
    
<div id="hero" className="min-h-screen flex flex-col items-center justify-center text-center bg-pastelblue px-6 pt-24 animate-fadeIn" >
      
      {/* Profile Photo */}
      <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6">
        <img src={myphoto} alt="Revanth Shada" className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Hi, I'm Revanth Shada
      </h1>

      {/* Typing Animation */}
      <Typed
        className="text-xl md:text-2xl text-gray-600"
        strings={[
          "Full Stack Software Developer",
          "Backend Enthusiast",
          "Cloud and AWS Explorer",
          "Fast Learner and Team Player",
          "Natural Language Processing"
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
      <div className="mt-10 animate-bounce text-3xl text-gray-600">
  ↓
</div>


    </div>
  );
};

export default Hero;

