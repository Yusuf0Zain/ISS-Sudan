import './Services.css';
import faculty from '../../data/faculties.json';
import helps from '../../data/helps.json';
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className="services-container">
      <div className="faculty-container">
      <h1 className="Ftitle">Choose a Faculty</h1>
    <div className="button-container">
    {faculty.map((item) => (
      <button className="brutalist-button">
        <div className="logo">
            <img
              src={item.icon}
              className="icon"
            />
        </div>
        <div className="button-text">
          <span>{item.name}</span>
        </div>
      </button>
    ))}
    </div>
    </div>
    <div>
      <h1 className="Ftitle">Helping Hand</h1>
      <div className="button-container">
      {helps.map((item) => (
        <button className="helping-button">
          <div className="helping-logo">
              <img
                src={item.icon}
                className="icon"
              />
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