import React from 'react';
import './FreeTrial.css'; // Import the updated CSS file

const FreeTrial = () => {
  return (
    <div className="free-trial">
      <div className="heading-container">
        <h1 className="heading">Try Whitepace today</h1>
        <p className="subheading">Get started for free. Add your whole team as your needs grow.</p>
        <div className="btn-try">
          <span className="btn-text">Try Taskey free</span>
        </div>
      </div>
      <div className="text-block">
        <p className="contact-sales">On a big team? Contact sales</p>
      </div>
      <div className="app-icons">
        <div className="app-icon">
          <img src="path-to-apple-logo.png" alt="Apple logo" className="apple-logo" />
        </div>
        <div className="app-icon">
          <img src="path-to-windows-logo.png" alt="Windows logo" className="windows-logo" />
        </div>
        <div className="app-icon">
          <img src="path-to-android-logo.png" alt="Android logo" className="android-logo" />
        </div>
      </div>
      {/* Vector elements for decoration */}
      <div className="vector vector-1"></div>
      <div className="vector vector-2"></div>
      <div className="vector vector-3"></div>
      <div className="vector vector-4"></div>
    </div>
  );
};

export default FreeTrial;
