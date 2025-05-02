import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed w-full flex flex-col items-center justify-center py-12 bg-pastelgreen text-gray-700">
      <p className="text-lg font-semibold mb-4">Let's Connect!</p>
      <div className="flex gap-6">
        <a href="mailto:revanthshada2001@gmail.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
          Email
        </a>
        <a href="https://linkedin.com/in/revanthshada" target="_blank" rel="noreferrer" className="hover:text-blue-700">
          LinkedIn
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-700">
          GitHub
        </a>
      </div>
      <p className="mt-8 text-sm text-gray-500">© 2025 Revanth Shada. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
