import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen snap-start flex flex-col items-center justify-center bg-pastelgreen px-8 py-12" >
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact</h2>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
        I'm always excited to connect with professionals, recruiters, or fellow developers!  
        Feel free to reach out for collaboration, opportunities, or tech discussions.
      </p>
      <div className="flex gap-8 mt-4">
        <a href="mailto:revanthshada@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope size={32} className="hover:text-blue-500" />
        </a>
        <a href="https://linkedin.com/in/revanthshada" target="_blank" rel="noreferrer">
          <FaLinkedin size={32} className="hover:text-blue-700" />
        </a>
        <a href="https://github.com/revanthreddy7" target="_blank" rel="noreferrer">
          <FaGithub size={32} className="hover:text-gray-700" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
