import React from 'react';
import Logo from '../assets/div.png'; 

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-700 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4">
        {/* Logo */}
        <div className="mb-4 sm:mb-0">
          <img src={Logo} alt="Logo" className="h-16 sm:h-20 w-auto mx-auto sm:mx-0" /> {/* Adjust height */}
        </div>
        {/* Copyright */}
        <div className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Divine Cabigting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
