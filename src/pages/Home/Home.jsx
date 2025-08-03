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
        {images.map((img, idx) => (
          <img key={images.length + idx} src={img} alt={`group${idx + 1}-dup`} className="bg-img" />
        ))}
      </div>
      <div className="home-content">
        <div className="home-title">
          <span className="sudan">ISS-SUDAN UTM </span> <br />
          Website
          <div className="text">Welcome to ISS-SUDAN UTM Official Website</div>
        </div>
      </div>
    </div>
  );
}

export default Home;