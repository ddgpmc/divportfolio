import React from 'react';
import Typewriter from 'react-typewriter-effect'; // Import Typewriter for the typing effect
import backgroundImage from '../assets/bgherobg.jpg'; // Adjust path as necessary
import profileImage from '../assets/picprof.png'; // Adjust path as necessary
import Education from './Education';
import Experiences from './Experiences';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faPhp, faLaravel, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
// Add placeholder icons for Next.js and TypeScript

const About = () => {
  return (
    <div>
      {/* About Me Section */}
      <div
        className="relative min-h-screen bg-cover bg-center radius-6 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 "></div> {/* Dark overlay */}
        <div className="relative container mx-auto flex flex-col md:flex-row items-center p-10 space-y-8 md:space-y-0">
          {/* Text Section */}
          <div className="text-black md:w-1/2 lg:w-2/3 text-center md:text-left">
            <p className="text-lg mb-4">About me</p>
            <h1 className="text-4xl font-bold mb-4">
              <Typewriter
                text="Divine Cabigting"
                cursorColor="white"
                typeSpeed={100}
                deleteSpeed={50}
                delay={1000}
              />
            </h1>
            <p className="text-lg mb-4 mr-10">
              Hi, I’m Divine, a passionate Developer with a keen interest in website and application development. With over 3 years of experience in the IT industry, I specialize in design and front-end development. My goal is to leverage my skills and knowledge to create innovative solutions and empower others to develop their own projects. I am committed to sharing my expertise and teaching others to excel in the field of development, whenever the opportunity arises.
            </p>
            <p className="text-lg mr-10">
              In my free time, I enjoy designing and exploring new creative techniques. I believe in continuous learning and staying updated with the latest trends in website and application development.
            </p>
            {/* Social Media Section */}
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <a href="mailto:your-email@example.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-red-600" />
              </a>
              <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} className="text-3xl text-blue-600" />
              </a>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl text-pink-600" />
              </a>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 lg:w-1/3 flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-100 h-100 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
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
      <div id="experiences" className="w-full bg-gray-100 ">
        <Experiences />
      </div>
    </div>
  );
};

export default About;
