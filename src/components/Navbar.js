import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const [scrolled, setScrolled] = useState(false); // State to track scroll position

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-gray-800 bg-opacity-75 backdrop-blur-md text-white' : 'bg-transparent text-black'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className={scrolled ? 'text-white' : 'text-black'}>
            &lt;div&gt;
          </Link>
        </div>

        {/* Hamburger Icon (shown on mobile) */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-4 absolute lg:relative w-full lg:w-auto left-0 top-14 lg:top-auto lg:bg-transparent lg:flex-row lg:items-center lg:space-x-4 lg:mt-0 lg:p-0 p-4 space-y-2 lg:space-y-0 ${
            scrolled ? 'text-white' : 'text-black'
          }`}
        >
          <li>
            <Link to="/" className={`block ${scrolled ? 'text-white' : 'text-black'} hover:text-gray-400`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`block ${scrolled ? 'text-white' : 'text-black'} hover:text-gray-400`}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={`block ${scrolled ? 'text-white' : 'text-black'} hover:text-gray-400`}>
              Projects
            </Link>
          </li>
          <li>
            <a href="mailto:youremail@gmail.com" className={`block ${scrolled ? 'text-white' : 'text-black'} hover:text-gray-400`}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
