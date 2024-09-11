import React from 'react';
import Typewriter from 'react-typewriter-effect'; // Typing effect for name
import backgroundImage from '../assets/bgherobg.jpg'; // Background image
import profileImage from '../assets/picprof.png'; // Profile image
import Education from './Education';
import Experiences from './Experiences';
import next from '../assets/next.png'; // Next.js logo
import ts from '../assets/ts.png'; // TypeScript logo
import net from '../assets/net.png'; // .NET logo
import csharp from '../assets/c.png'; // C# logo

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faPhp, faLaravel, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div>
      {/* About Me Section */}
      <div className="relative min-h-screen bg-cover bg-center radius-6 flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0"></div> {/* Dark overlay */}
        <div className="relative container mx-auto flex flex-col items-center md:flex-row p-10 space-y-8 md:space-y-0">
          
          {/* Image Section */}
          <div className="w-72 h-auto md:w-1/2 lg:w-1/3 flex justify-center mt-8 mb-4 md:mb-0">
            {/* Adjust the profile image size for mobile */}
            <img src={profileImage} alt="Profile" className="w-64 h-64 md:w-48 md:h-48 object-cover rounded-full" />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 lg:w-2/3 text-center md:text-left">
            <p className="text-lg mb-4">About me</p>
            <div className="text-4xl font-bold mb-4 sm:text-center md:text-left"> {/* Centering only on small screens */}
              <Typewriter text="Divine Cabigting" cursorColor="white" typeSpeed={100} deleteSpeed={50} delay={1000} />
            </div>
            <p className="text-lg mb-4">
              Hi, I’m Divine, a passionate Developer with a keen interest in website and application development. With over 3 years of experience in the IT industry, I specialize in design and front-end development...
            </p>
            <p className="text-lg">
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
        </div>
      </div>

      {/* Tech Stack Section */}
      <section id="techstack" className="w-full bg-gray-200 py-10 px-4 sm:px-8 md:px-20 lg:px-40">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-3xl text-orange-500 font-bold mb-4">My Tech Stack</h2>
          <p className="text-base md:text-lg mb-4">
            I am proficient in a variety of technologies. Here are some of the tools and languages I use:
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: faHtml5, name: 'HTML5', color: 'text-orange-600' },
              { icon: faCss3Alt, name: 'CSS3', color: 'text-blue-600' },
              { icon: faPhp, name: 'PHP', color: 'text-purple-600' },
              { icon: faLaravel, name: 'Laravel', color: 'text-red-600' },
              { icon: faReact, name: 'ReactJS', color: 'text-blue-500' },
              { icon: faJs, name: 'JavaScript', color: 'text-yellow-500' },
              { icon: faNodeJs, name: 'NodeJS', color: 'text-green-500' }
            ].map((tech, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <FontAwesomeIcon icon={tech.icon} className={`text-3xl md:text-4xl ${tech.color}`} />
                <span className="text-lg md:text-xl">{tech.name}</span>
              </div>
            ))}
            {/* Custom Tech Icons */}
            {[
              { img: next, name: 'Next.js' },
              { img: ts, name: 'TypeScript' },
              { img: csharp, name: 'C#' },
              { img: net, name: '.NET' }
            ].map((tech, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <img src={tech.img} alt={tech.name} className="w-6 md:w-8 h-6 md:h-8" />
                <span className="text-lg md:text-xl">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education and Experiences Sections */}
      <section id="education" className="w-full bg-gray-100">
        <Education />
      </section>
      <section id="experiences" className="w-full bg-gray-100">
        <Experiences />
      </section>
    </div>
  );
};

export default About;
