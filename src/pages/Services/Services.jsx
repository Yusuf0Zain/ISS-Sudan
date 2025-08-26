import './Services.css';
import { useState, useEffect, useRef } from 'react';
import faculty from '../../data/faculties.json';
import helps from '../../data/helps.json';

// Import all guide components
import Visas from './guides/visas';
import Health from './guides/health';
import UniversityServices from './guides/services';
import Activities from './guides/activities';
import City from './guides/city';
import Housing from './guides/housing';
import Mental from './guides/mental';
import Contacts from './guides/contacts';
import FAQ from './guides/faq';

const imageContext = require.context('../../assets/faculty/', true, /\.png$/);

// Component mapping
const guideComponents = {
  1: Visas,
  2: Health,
  3: UniversityServices,
  4: Activities,
  5: City,
  6: Housing,
  7: Mental,
  8: Contacts,
  9: FAQ
};

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [animateCircles, setAnimateCircles] = useState(false);
  const [visibleCircles, setVisibleCircles] = useState(false);
  const prevActiveIndexRef = useRef(null);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [loadingGuide, setLoadingGuide] = useState(false);

  const handleButtonClick = (index) => {
    prevActiveIndexRef.current = activeIndex;
    setActiveIndex(index === activeIndex ? null : index);
    setVisibleCircles(false);
  };

  const handleGuideClick = (guide) => {
    setLoadingGuide(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      setSelectedGuide(guide);
      setLoadingGuide(false);
    }, 0);
  };

  useEffect(() => {
    if (activeIndex !== null && activeIndex !== prevActiveIndexRef.current) {
      // Start animation
      setAnimateCircles(true);
      
      // Set visible after animation completes
      const animationTimer = setTimeout(() => {
        setVisibleCircles(true);
        setAnimateCircles(false);
      }, 1000);
      
      return () => clearTimeout(animationTimer);
    } else if (activeIndex === null) {
      // Reset when no faculty is selected
      setVisibleCircles(false);
      setAnimateCircles(false);
    }
  }, [activeIndex]);

  // Get the appropriate component based on selected guide ID
  const GuideComponent = selectedGuide ? guideComponents[selectedGuide.id] : null;

  return (
    <div className="services-container">
      <div className={`faculty-container ${activeIndex !== null ? 'active' : ''}`}>
        <div className="mask">
          <div className="faculty-details">
            {activeIndex !== null && (
              <>
                <h1>Faculty of</h1>
                <h1>{faculty[activeIndex].name}</h1>

                {/* Circle Images */}
                <div className="circle-container">
                  {[1, 2, 3].map((num, i) => (
                    <div 
                      key={i} 
                      className={`circle circle-${i} ${animateCircles ? 'animate' : ''} ${visibleCircles ? 'visible' : ''}`}
                    >
                      <img
                        src={imageContext(`./${faculty[activeIndex].folder}/${num}.png`)}
                        alt={`circle-${i}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Faculty Links - Top Right */}
                <div className="faculty-links">
                  <h3>Faculty Links</h3>
                  <div className="links-container">
                    {faculty[activeIndex].Flinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="SocialLink"
                      >
                        <img src={link.icon} alt={link.name} className="socialIcon" />
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* ISS Links - Middle Right */}
                <div className="iss-links">
                  <h3>ISS Links</h3>
                  <div className="links-container">
                    {faculty[activeIndex].Slinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="SocialLink"
                      >
                        <img src={link.icon} alt={link.name} className="socialIcon" />
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {activeIndex !== null && <div className="mask"></div>}

        <div className="faculty">
          <h1 className={`Ftitle ${activeIndex !== null ? 'fade-out' : ''}`}>Choose a Faculty</h1>
          <div className="button-container">
            {faculty.map((item, index) => (
              <button
                key={index}
                className={`brutalist-button ${activeIndex === index ? 'active' : ''}`}
              >
                <div className="logo">
                  <img src={item.icon} className="icon" alt={item.name} />
                </div>
                <div className="button-text">
                  <span>{item.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="guides-section">
        <h1 className="Ftitle">Student Guide</h1>
        <div className="button-container">
          {helps.map((item) => (
            <button 
              key={item.id} 
              className="helping-button"
              onClick={() => handleGuideClick(item)}
            >
              <div className="helping-logo">
                <img src={item.icon} className="icon" alt={item.Name} />
              </div>
              <div className="button-text-help">
                <span>{item.Name}</span>
              </div>
              <div className="helping-description">
                <span>{item.description}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedGuide && (
        <div className="popup-overlay">
          <div className="popup-box">
            {/* Header with Title and Close */}
            <div className="popup-header">              <button
                className="close-btn"
                onClick={() => setSelectedGuide(null)}
              >
                ✖
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="popup-content">
              {
                GuideComponent && <GuideComponent />
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;