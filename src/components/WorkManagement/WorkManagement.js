import React from 'react';
import './WorkManagement.css';
import dss from "./dss.svg"

const WorkManagement = () => {
  return (
    <div className="work-together-container">
      {/* Work Together Image Section */}
      <div className="work-together-image-container">
        {/* Add your image here */}
        <img src={dss} alt="Work Together" className="work-together-image" />
        
        {/* If you still want the ellipses for decorative elements */}
      
        
        <div className="group327">
          <div className="rectangle366" />
          <div className="logo-icon" />
        </div>
      </div>

      {/* Headline Section */}
      <div className="headline-section">
        <div className="work-together-text">
          <h1 className="work-together-heading">Work together</h1>
          <p className="work-together-description">
            With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>

          {/* Button to Get Started */}
          <div className="btn-get-started">
            <span className="try-it-now">Try it now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkManagement;
