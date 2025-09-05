import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './About.css';
import MovingPattern from '../../components/MovingPattern.jsx';
import teamMembers from '../../data/teamMembers.json';

function About() {
  const [activeTeam, setActiveTeam] = useState('TopMembers');
  
  const renderCards = () => {
    const currentTeam = teamMembers[activeTeam] || [];
    return currentTeam.map((member) => (
      <div className="flip-card" key={member.id}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">{member.name}</p>
            <img src={member.image} alt={member.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <img src={member.icon} className="Micon" style={{ width: '60px', height: '60px' }} />
          </div>
          <div className="flip-card-back">
            <p className="title">{member.position}</p>
            <p>{member.name}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="about-content">
        <div className="AboutTitle">
          <img src="/ISSRetro.gif" className="about-image" alt="ISS-Sudan" />
          <h1 style={{ color: '#04914c', fontSize: '5rem', textShadow: '4px 4px 0px #282c34' }}>What is ISS-Sudan?</h1>
        </div>
        <p>
          ISS-Sudan is a non-profit organization dedicated to providing
          comprehensive support and services to the Sudanese community in
          UTM. Our mission is to empower individuals and families
          through education, healthcare, and social services.
        </p>
      </div>
      <div className="about-content">
        <h1 style={{ color: '#04914c', fontSize: '5rem', textShadow: '4px 4px 0px #282c34', textAlign: 'center' }}>Our Current Team</h1>
        
        <div className="team-buttons">
          <button 
            className={`committee-button ${activeTeam === 'TopMembers' ? 'active' : ''}`} 
            onClick={() => setActiveTeam('TopMembers')}
            style={{ backgroundColor: activeTeam === 'TopMembers' ? '#8c0000ff' : '' }}
          >
            Top 4
          </button>
          <button 
            className={`committee-button ${activeTeam === 'Logistic' ? 'active' : ''}`} 
            onClick={() => setActiveTeam('Logistic')}
            style={{ backgroundColor: activeTeam === 'Logistic' ? '#8c0000ff' : '' }}
          >
            Logistic
          </button>
          <button 
            className={`committee-button ${activeTeam === 'Media' ? 'active' : ''}`} 
            onClick={() => setActiveTeam('Media')}
            style={{ backgroundColor: activeTeam === 'Media' ? '#8c0000ff' : '' }}
          >
            Media
          </button>
          <button 
            className={`committee-button ${activeTeam === 'Social' ? 'active' : ''}`} 
            onClick={() => setActiveTeam('Social')}
            style={{ backgroundColor: activeTeam === 'Social' ? '#8c0000ff' : '' }}
          >
            Social
          </button>
          <button 
            className={`committee-button ${activeTeam === 'Woman' ? 'active' : ''}`} 
            onClick={() => setActiveTeam('Woman')}
            style={{ backgroundColor: activeTeam === 'Woman' ? '#8c0000ff' : '' }}
          >
            Women
          </button>
          <button 
            className={`committee-button ${activeTeam === 'Student' ? 'active' : ''}`} 
            onClick={() => setActiveTeam('Student')}
            style={{ backgroundColor: activeTeam === 'Student' ? '#8c0000ff' : '' }}
          >
            Student
          </button>
          <button 
            className={`committee-button ${activeTeam === 'Academic' ? 'active' : ''}`} 
            onClick={() => setActiveTeam('Academic')}
            style={{ backgroundColor: activeTeam === 'Academic' ? '#8c0000ff' : '' }}
          >
            Academic
          </button>
          <button 
            className={`committee-button ${activeTeam === 'Sports' ? 'active' : ''}`} 
            onClick={() => setActiveTeam('Sports')}
            style={{ backgroundColor: activeTeam === 'Sports' ? '#8c0000ff' : '' }}
          >
            Sports
          </button>
        </div>
        
        <div className="Cards">
          {renderCards()}
        </div>  
        <div className="movePattern">
          <MovingPattern />
        </div>       
      </div>
      <div className="PastTeam">
        <h1 style={{ color: '#04914c', fontSize: '5rem', textShadow: '4px 4px 0px #282c34', textAlign: 'center' }}>Former Teams</h1>
      </div>
    </div>
  );
}

export default About;