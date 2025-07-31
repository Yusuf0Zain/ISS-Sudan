import React from 'react';
import './Services.css';
import faculty from '../../data/faculties.json';
function Services() {
  return (
    <div>
      <div className="faculty-container">
      <h1 className="title">Choose a Faculty</h1>
    <div className="button-container">
    {faculty.map((item) => (
      <button className="brutalist-button">
        <div className="logo">
            <img
              src={item.icon}
              className="icon" style={{ color : '#1c274c' }}
            />
        </div>
        <div className="button-text">
          <span>{item.name}</span>
        </div>
      </button>
    ))}
    </div></div>   
    </div>
  );
}

export default Services;