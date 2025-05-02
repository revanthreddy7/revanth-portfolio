import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/myphoto.png'; // ✅ Import profile image

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          {isScrolled && (
            <img
              src={profilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover transition-all duration-300"
            />
          )}
          <div className="text-2xl font-bold text-gray-800">Revanth Shada</div>
        </div>

        <div className="flex items-center gap-6 text-gray-700 text-sm">
          <a href="#about" className="hover:text-blue-500 font-semibold">About</a>
          <a href="#skills" className="hover:text-blue-500 font-semibold">Skills</a>
          <a href="#experience" className="hover:text-blue-500 font-semibold">Experience</a>
          <a href="#projects" className="hover:text-blue-500 font-semibold">Projects</a>
          <a href="#achievements" className="hover:text-blue-500 font-semibold">Achievements</a>
          <a href="#contact" className="hover:text-blue-500 font-semibold">Contact</a>

          <a href="https://linkedin.com/in/revanthshada" target="_blank" rel="noreferrer">
            <FaLinkedin size={24} className="hover:text-blue-700" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub size={24} className="hover:text-gray-700" />
          </a>

          <a href="/your_resume.pdf" download className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 ml-2">
            Download Resume
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
