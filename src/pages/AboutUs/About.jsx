import React from 'react';
import './About.css';
import MovingPattern from '../../components/MovingPattern.jsx';
function About() {
  return (
  <div >

        <div className="about-content">
          <div className="movePattern">
            <MovingPattern />
          </div>
          <img src="/ISSRetro.gif" className="about-image"/>
          <h1>What is ISS-Sudan?</h1>
        </div>
  </div>
  );
}

export default About;