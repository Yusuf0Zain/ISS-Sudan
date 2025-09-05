import React from 'react';
import './Gallery.css';
import events from '../../data/events.json';

function Gallery() {
  return(
    <div className="gallery-container">
      <div className='Gtitle'>
        <h1>Choose Your Year</h1>
          {events.map(event => (
            <div key={event.id} className='event-year'>
              {event.year}
            </div>
          ))}
      </div>

      {events.map(event => (
        <div key={event.id} className='timeline'>
          <img src="long-piece-of-natural-jute-rope-on-isolated-background-with-twisted-texture-and-design.png" 
          alt="Gallery" 
          />
          <div className='circle' style={{backgroundColor:'#e3d19c'}}>
            <img src='fnaf-2-puppet-gangnam-style.gif'/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;