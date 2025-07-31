import React from 'react';
import './Services.css';
import faculty from '../../data/faculties.json';
function Services() {
  return (
    <div className="services-container">
    {faculty.map((item) => (
    <div className="button-container">
      <button className="brutalist-button openai">
        <div className="logo">
          {item.icon && (
            <img
              src={item.icon}
              className="icon"
            />
          )}
        </div>
        <div className="button-text">
          <span>{item.name}</span>
        </div>
      </button>
    </div>
    ))}

    </div>
  );
}

export default Services;