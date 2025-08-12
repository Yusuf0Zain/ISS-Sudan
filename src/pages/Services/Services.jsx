import './Services.css';
import { useState } from 'react';
import faculty from '../../data/faculties.json';
import helps from '../../data/helps.json';
import { Link } from 'react-router-dom';

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="services-container">
      <div className={`faculty-container ${activeIndex !== null ? 'active' : ''}`}>
        <div className="faculty-details">
          <h1>Faculty of</h1>
          <h1 style={{color:'white',fontSize: '3rem'}}>name</h1>
        </div>
        <div className="faculty">
          <h1 className={`Ftitle ${activeIndex !== null ? 'fade-out' : ''}`}>Choose a Faculty</h1>
          <div className="button-container">
            {faculty.map((item, index) => (
              <button
                key={index}
                className={`brutalist-button ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleButtonClick(index)}
              >
                <div className="logo">
                  <img src={item.icon} className="icon" />
                </div>
                <div className="button-text">
                  <span>{item.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="Ftitle">Helping Hand</h1>
        <div className="button-container">
          {helps.map((item, i) => (
            <button key={i} className="helping-button">
              <div className="helping-logo">
                <img src={item.icon} className="icon" />
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
    </div>
  );
}

export default Services;
