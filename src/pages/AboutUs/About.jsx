import React from 'react';
import './About.css';
import MovingPattern from '../../components/MovingPattern.jsx';
function About() {
  return (
  <div >

        <div className="about-content">
          <div className="AboutTitle">
          <h1 style={{ color: '#04914c', fontSize: '5rem', textShadow: '4px 4px 0px #282c34' }}>What is ISS-Sudan?</h1>
          <img src="/ISSRetro.gif" className="about-image"/>
          </div>
          <p>
            ISS-Sudan is a non-profit organization dedicated to providing
            comprehensive support and services to the Sudanese community in
            UTM. Our mission is to empower individuals and families
            through education, healthcare, and social services.
          </p>
          <div className="movePattern">
            <MovingPattern />
          </div>
        </div>
        <div className="Team">
          <h1 style={{ color: '#04914c', fontSize: '5rem', textShadow: '4px 4px 0px #282c34', textAlign: 'center' }}>Our Current Team</h1>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p className="title">Name</p>
                    <img src="Faculites_icon/bolt-svgrepo-com.svg" style={{objectFit: 'cover', scale: '.5'}} />
                </div>
                <div className="flip-card-back">
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
                </div>
            </div>
        </div>
        </div>
        <div className="PastTeam">
          <h1 style={{ color: '#04914c', fontSize: '5rem', textShadow: '4px 4px 0px #282c34', textAlign: 'center' }}>Former Teams</h1>
        </div>
  </div>
  );
}

export default About;