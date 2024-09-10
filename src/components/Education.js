import React, { useEffect, useRef } from 'react';
import AUJASImage from '../assets/AUJAS.jpg';
import TUPImage from '../assets/tup.jpg';
import './Education.css';

const Education = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="education-container">
      <h2 className="text-3xl font-bold text-center">Education</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="card" ref={(el) => (cardRefs.current[0] = el)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={AUJASImage} alt="Degree 1" className="card-image" />
              <h3 className="card-title">Arellano University SHS - Jose Abad Santos</h3>
              <p className="card-description">Graduated 2019 with <b>High Honors</b></p>
              <p className="card-description2">Hover the card to see my achievements</p>
            </div>
            <div className="card-back">
              <h3 className="card-title">Science, Technology, Engineering & Mathematics</h3>
              <p className="card-description">High Honors</p>
              <p className="card-description">Consistent Top 10</p>
              <p className="card-description">Achieved all of these while I was a working student</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" ref={(el) => (cardRefs.current[1] = el)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={TUPImage} alt="Degree 2" className="card-image" />
              <h3 className="card-title">Technological University of the Philippines</h3>
              <p className="card-description">Graduated August 2023 with <b>Latin Honors</b></p>
              <p className="card-description2">Hover the card to see my achievements</p>
            </div>
            <div className="card-back">
              <h3 className="card-title">Bachelor of Science in Information Technology</h3>
              <p className="card-description">Magna Cum Laude 2023</p>
              <p className="card-description">2nd Best Thesis Awardee</p>
              <p className="card-description">Consistent Dean's Lister / President's Lister</p>
              <p className="card-description">Achieved all of these while I was a working student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;