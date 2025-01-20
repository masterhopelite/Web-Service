import React from 'react';
import './Sponser.css'; // Import the CSS file for the component

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="heading-container">
        <h1 className="heading">Our Sponsors</h1>
      </div>

      <div className="sponsors">
        {/* Apple Sponsor */}
        <div className="sponsor apple">
          <div className="apple-logo">
            {/* Add your logo or elements inside */}
          </div>
        </div>

        {/* Microsoft Sponsor */}
        <div className="sponsor microsoft">
          <div className="microsoft-logo">
            {/* Add your logo or elements inside */}
          </div>
        </div>

        {/* Slack Sponsor */}
        <div className="sponsor slack">
          <div className="slack-logo">
            {/* Add your logo or elements inside */}
          </div>
        </div>

        {/* Google Sponsor */}
        <div className="sponsor google">
          <div className="google-logo">
            {/* Add your logo or elements inside */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
