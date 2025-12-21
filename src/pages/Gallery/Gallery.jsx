import React, { useState, useEffect } from 'react';
import events from '../../data/events.json';
import './Gallery.css';

const categoryColors = {
  'social': '#d8bd0fff',
  'women': '#9928c5ff',
  'student': '#c57928ff',
  'academic': '#c52828ff',
  'sports': '#28c52bff',
};

const categoryName = {
  'social': 'Social and Cultural Committee',
  'women': 'Women Affairs Committee',
  'student': 'Student Affairs Committee',
  'academic': 'Academic Committee',
  'sports': 'Sports Committee',
};

function Gallery() {

  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year === selectedYear ? null : year);
  };

  return (
    <div className="gallery-container">
      <title>ISS-Sudan Gallery</title>
      <div className='Gtitle'>
        <h1>Choose Your Year</h1>
      </div>
      
      {/* Year selection buttons */}
      <div className="year-buttons">
        {events.map(event => (
          <button
            key={event.id}
            className={`year-button ${selectedYear === event.year ? 'active' : ''}`}
            onClick={() => handleYearClick(event.year)}
          >
            {event.year}
          </button>
        ))}
      </div>

      {/* Timeline for selected year */}
      {selectedYear && (
        <div className="timeline-container">
          {events
            .filter(event => event.year === selectedYear)
            .map(yearEvents => (
              <div key={yearEvents.id} className="timeline">
              {yearEvents.events.map((event, index) => (
                <div key={index} className="timeline-event">
                  <div className='circle'></div>
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <p 
                      className="event-category"
                      style={{ backgroundColor: categoryColors[event.category] }}
                    >
                      {categoryName[event.category] || event.category}
                    </p>
                    <p className="event-date">{event.date}</p>
                    <a 
                      href={event.driveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="event-link"
                    >
                      Drive Link <img src="Social/google-drive-svgrepo-com.svg" className="driveicon" />
                    </a>
                  </div>
                </div>
              ))}

              {/* Bottom rope circle */}
              <div className="timeline-end"></div>
            </div>
            ))
          }
        </div>
      )}
      
    </div>
  );
}

export default Gallery;