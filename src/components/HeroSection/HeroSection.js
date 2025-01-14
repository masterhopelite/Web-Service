import React from 'react';
import './HeroSection.css';
import image from "./image.svg"
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="heading">
        <div className="text-block">
          <h2>Get More Done with Whitepace</h2>
          <p>
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
        </div>
        <div className="btn-free-trial">
          <span>Try Whitepace free</span>
          <div className="group-212">
            <div className="vector"></div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
