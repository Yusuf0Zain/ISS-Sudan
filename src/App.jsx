import { Suspense, lazy } from 'react'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Links from './components/links.jsx'
import Loader from './components/loading'

// Lazy load your route components
const Home = lazy(() => import('./pages/Home/Home'));
const Services = lazy(() => import('./pages/Services/Services'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const About = lazy(() => import('./pages/AboutUs/About'));

function App() {
  return (
    <div className="container">
      <Links />
      <div className="header">
        <div className="header-left">
          <span className="header-title">
            ISS <span style={{ color: '#fff' }}>Sudan</span>
          </span>
        </div>
        <div className="header-center">
          <Navbar />
        </div>
        <div className="header-right">
        </div>
      </div>
      <div className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;