import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faPhp, faLaravel, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
// Add placeholder icons for Next.js and TypeScript
import { faNext, faTypescript, faCsharp, faDotnet } from '@fortawesome/free-brands-svg-icons'; // Assuming you have these icons

import Education from './Education';
import Experiences from './Experiences';

// Typing animation styles
const typingStyles = {
  fontFamily: 'monospace',
  fontSize: '2rem',
  color: 'black',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'inline-block',
  borderRight: '.15em solid #fff',
  animation: 'typing 4s steps(20, end) infinite, blink-caret .75s step-end infinite',
};

const animationKeyframes = `
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: white; }
}
`;

const StyleSheet = () => (
  <style>
    {animationKeyframes}
  </style>
);

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <StyleSheet />

      {/* Hero Section with Background Image */}
      <div className="relative flex flex-col items-center overflow-hidden h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/assets/bgherobg.jpg")' }}>
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
          {/* Small Picture Above Typing Animation */}
          <img src="/assets/homepic.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4" />

          {/* Typing Logo */}
          <div style={typingStyles} className="mb-4">
            &lt;div&gt;
          </div>

          <h1 className="text-4xl font-bold text-orange-500 mb-4">Hello, I'm Divine!</h1>
          
          {/* Centered Long Description */}
          <div className="max-w-xl mx-auto mb-8">
            <p className="text-m text-black">
              Hi, I’m Divine Cabigting, a passionate Developer with a keen interest in website and application development. With over 3 years of experience in the IT industry, I specialize in design and front-end development.
            </p>

            {/* Download CV Button */}
            <div className="mt-5">
              <a
                href="/assets/Divine_CV.pdf"  // Replace with the path to your CV file
                download
                className="inline-block px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-md font-semibold transition"
              >
                Download My CV
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-8">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/bayndiiii/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-800  hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/ddgpmc_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-800 hover:text-pink-800"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            {/* Email */}
            <a
              href="mailto:divinecabigting12345@gmail.com"
              className="text-3xl text-gray-800  hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

          {/* Scroll Down Arrow */}
          <div className="mb-4">
            <button
              onClick={() => scrollToSection('techstack')}
              className="text-orange-500  hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faChevronDown} className="text-3xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div id="techstack" className="w-full bg-gray-200 py-10 px-40">
        <div className="container mx-auto text-center mb-20 ">
          <h2 className="text-3xl text-orange-500 font-bold mb-4">My Tech Stack</h2>
          <p className="text-lg mb-4">
            I am proficient in a variety of technologies. Here’s a list of some of the tools and languages I use:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faHtml5} className="text-4xl text-orange-600" />
              <span className="text-xl">HTML5</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faCss3Alt} className="text-4xl text-blue-600" />
              <span className="text-xl">CSS3</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhp} className="text-4xl text-purple-600" />
              <span className="text-xl">PHP</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLaravel} className="text-4xl text-red-600" />
              <span className="text-xl">Laravel</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-500" />
              <span className="text-xl">ReactJS</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faJs} className="text-4xl text-yellow-500" />
              <span className="text-xl">JavaScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faNodeJs} className="text-4xl text-green-500" />
              <span className="text-xl">NodeJS</span>
            </div>
            {/* Placeholder icons for Next.js and TypeScript */}
            <div className="flex items-center space-x-2">
              <img src="/assets/next.png" alt="Next.js" className="w-8 h-8" />
              <span className="text-xl">Next.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/assets/ts.png" alt="TypeScript" className="w-8 h-8" />
              <span className="text-xl">TypeScript</span>
            </div>
            {/* Placeholder icons for C# and .NET */}
            <div className="flex items-center space-x-2">
              <img src="/assets/c.png" alt="C#" className="w-8 h-8" />
              <span className="text-xl">C#</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/assets/net.png" alt=".NET" className="w-12 h-12" />
              <span className="text-xl">.NET</span>
            </div>
          </div>
        </div>
      </div>

      {/* Education and Experiences Sections */}
      <div id="education" className="w-full bg-gray-100">
        <Education />
      </div>
      <div id="experiences" className="w-full bg-gray-100">
        <Experiences />
      </div>
    </div>
  );
};

export default Home;
