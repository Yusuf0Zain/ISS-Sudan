import { useState } from 'react'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Gallery from './pages/Gallery/Gallery'
import About from './pages/AboutUs/About'
import './App.css'
import icon from './logo.svg'

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <span className="header-title">ISS Sudan</span>
        </div>
        <div className="header-center">
          <Navbar />
        </div>
        <div className="header-right">
          <img
            src={icon}
            alt="ISS Sudan Logo"
            className="inline-block mr-2 align-middle logo-img"
          />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;