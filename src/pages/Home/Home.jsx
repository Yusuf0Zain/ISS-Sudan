import React from 'react';
import tower from '../../assets/tower.png';
import './Home.css';

const images = require.context('../../assets/groups', false, /\.(png|jpe?g|svg)$/)
  .keys()
  .map((file) => require(`../../assets/groups/${file.replace('./', '')}`));


function Home() {
  return (
    <div className="home-bg-wrapper">
      <div className="moving-bg">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`group${idx + 1}`} className="bg-img" />
        ))}
        {/* Duplicate for seamless loop */}
        {images.map((img, idx) => (
          <img key={images.length + idx} src={img} alt={`group${idx + 1}-dup`} className="bg-img" />
        ))}
      </div>
      <div className="home-content">
        <div className="sudan">ISS-SUDAN UTM </div>
        Website
        <div className="text">Welcome to ISS-SUDAN UTM Official Website</div>
      </div>
    </div>
  );
}

export default Home;