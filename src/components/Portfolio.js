import React, { useState } from 'react';

// Import all images
import awuImage from '../assets/AWU.png';
import homsImage from '../assets/homs1.png';
import sqdtImage from '../assets/SQDT.png';
import esagipImage from '../assets/esagip.png';
import beneathImage from '../assets/beneath.png';
import mappiyaImage from '../assets/mappiya.png';
import bookpassImage from '../assets/bookpass.png';
import esagipAppImage from '../assets/esagipapp.png';
import telegramImage from '../assets/tg.png';
import ga1aImage from '../assets/ga1a.jpg';
import ga2aImage from '../assets/ga2a.jpg';
import logo1Image from '../assets/logo1.jpg';
import logo2Image from '../assets/logo2.jpg';
import sapb1Image from '../assets/SAPB1.jpg';

const categories = [
  'All',
  'Frontend Development',
  'Full Stack Development',
  'UI/UX Development',
  'Graphic Design',
  'SAP Related',
];

const graphicDesignFilters = [
  'All',
  'Social Media Posts',
  'Logos',
];

const projects = [
  {
    title: 'AWU Foundation Website',
    description: 'AWU Foundation Website landing page',
    image: awuImage,
    category: 'Frontend Development',
  },
  {
    title: 'HOMS Website',
    description: 'HOMS Website landing page',
    image: homsImage,
    category: 'Frontend Development',
  },
  {
    title: 'Square D Tech. & Devt Website',
    description: 'Square D Tech. & Devt Website landing page',
    image: sqdtImage,
    category: 'Frontend Development',
  },
  {
    title: 'E-SAGIP Application',
    description: 'The ESAGIP app is an emergency response application tailored for barangay-level deployment.',
    image: esagipImage,
    category: 'Full Stack Development',
  },
  {
    title: 'Minting Website',
    description: 'Designed a minting website based on my idea',
    image: beneathImage,
    category: 'UI/UX Development',
  },
  {
    title: 'MAPPIYA Mobile App',
    description: 'Designed an Application for a food delivery company',
    image: mappiyaImage,
    category: 'UI/UX Development',
  },
  {
    title: 'BOOKPASS Mobile App',
    description: 'Redesigning BookPass booking application',
    image: bookpassImage,
    category: 'UI/UX Development',
  },
  {
    title: 'E-SAGIP Mobile App',
    description: 'Designed and Develop E-SAGIP Application',
    image: esagipAppImage,
    category: 'UI/UX Development',
  },
  {
    title: 'Telegram Mobile App Redesign',
    description: 'Redesigned Telegram Mobile Application for a more user-friendly experience',
    image: telegramImage,
    category: 'UI/UX Development',
  },
  {
    title: 'Social Media Post One',
    description: 'Designed for magazine entertainment',
    image: ga1aImage,
    category: 'Graphic Design',
    subCategory: 'Social Media Posts',
  },
  {
    title: 'Social Media Post Two',
    description: 'Designed for magazine entertainment',
    image: ga2aImage,
    category: 'Graphic Design',
    subCategory: 'Social Media Posts',
  },
  {
    title: 'Logo 1',
    description: 'Logo design for Love, Calli and Digipath IT Solutions',
    image: logo1Image,
    category: 'Graphic Design',
    subCategory: 'Logos',
  },
  {
    title: 'Logo 2',
    description: 'Logo design for Quick Needs and Buds & Batter',
    image: logo2Image,
    category: 'Graphic Design',
    subCategory: 'Logos',
  },
  {
    title: 'SAP Project One',
    description: 'Design, develop, and maintain libraries or APIs that provide access to platform-specific features, services, or functionality. Handles SAP Business One customization upon request of the clients. Languages: C# .NET, JavaScript.',
    image: sapb1Image,
    category: 'SAP Related',
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGraphicDesignFilter, setSelectedGraphicDesignFilter] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const filteredGraphicDesignProjects = selectedCategory === 'Graphic Design'
    ? (selectedGraphicDesignFilter === 'All'
      ? projects.filter(project => project.category === 'Graphic Design')
      : projects.filter(project => project.category === 'Graphic Design' && project.subCategory === selectedGraphicDesignFilter))
    : [];

  return (
    <div className="p-8 my-20 text-center">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>

      {/* Category Filters */}
      <div className="mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(category);
              if (category !== 'Graphic Design') {
                setSelectedGraphicDesignFilter('All');
              }
            }}
            className={`px-4 py-1 m-2 rounded-lg ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Graphic Design Filters */}
      {selectedCategory === 'Graphic Design' && (
        <div className="mb-8">
          {graphicDesignFilters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setSelectedGraphicDesignFilter(filter)}
              className={`px-4 py-1 m-2 rounded-lg ${selectedGraphicDesignFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {/* All Projects Grid */}
      <div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(selectedCategory !== 'Graphic Design' ? filteredProjects : filteredGraphicDesignProjects).map((project, index) => (
            <div key={index} className="relative border rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-72 relative group"> {/* Increase height */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <p className="text-white text-center">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
