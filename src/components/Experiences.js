import React, { useEffect, useRef } from 'react';
import './Experiences.css';

const Experiences = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Animate into view
          } else {
            entry.target.classList.remove('in-view'); // Remove class to hide when not in view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    // Observe all cards
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup observer on unmount
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className="experiences-container">
      <h2 className="text-3xl font-bold text-orange-500 mb-8">Experiences</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Experience 1 */}
        <div className="experience-card" ref={(el) => cardsRef.current.push(el)}>
          <div className="experience-card-content">
            <h4 className="experience-title">Graphic Artist / Graphic Designer</h4>
            <p className="experience-date">Brandsasia Channel Digital, Contura Medica</p>
            <p className="experience-date">2021-2022</p>
            <p className="experience-description">
              Creating visually appealing images to accompany written text; includes meeting with the head to determine their needs, completing projects using design software, and revising projects based on manager's feedback.
            </p>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="experience-card" ref={(el) => cardsRef.current.push(el)}>
          <div className="experience-card-content">
            <h4 className="experience-title">Part Time (Front-End Developer, UI/UX Designer)</h4>
            <p className="experience-date">Yaramay Computer Maintenance Services</p>
            <p className="experience-date">2022 - 2023</p>
            <p className="experience-description">
              Coordinated communications with the team. Constructed the visual elements on a page, such as layout, buttons, menus, forms, and other features using ReactJS and NodeJS (SPAs).
            </p>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="experience-card" ref={(el) => cardsRef.current.push(el)}>
          <div className="experience-card-content">
            <h4 className="experience-title">JR. APPLICATIONS DEVELOPER</h4>
            <p className="experience-date">MITACOR</p>
            <p className="experience-date">MARCH 2023 - AUG 2023</p>
            <p className="experience-description">
              Primary focus is on designing, developing, and maintaining software applications. Utilized programming expertise and technical skills to create efficient and user-friendly applications using PHP, Laravel, ReactJS & JS.
            </p>
          </div>
        </div>

        {/* Experience 4 */}
        <div className="experience-card" ref={(el) => cardsRef.current.push(el)}>
          <div className="experience-card-content">
            <h4 className="experience-title">SDK PROGRAMMER</h4>
            <p className="experience-date">FASTTRACK SOLUTIONS INC.</p>
            <p className="experience-date">AUG 2023 - MAY 2024</p>
            <p className="experience-description">
              Design, develop, and maintain libraries or APIs that provide access to platform-specific features, services, or functionality. Handles SAP Business One customization upon request of the clients. Languages: C# .NET, JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
