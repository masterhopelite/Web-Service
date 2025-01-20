import React from 'react';
import './Extension.css'; // Import your CSS file

const Extension = () => {
  return (
    <div className="custom-container">
      <div className="heading-container">
        <h1 className="heading">Your Heading</h1>
        <p className="paragraph">
          This is a paragraph explaining more details. Feel free to adjust the content as necessary.
        </p>
        <div className="btn-get-started">
          <span className="btn-text">Let’s Go</span>
        </div>
      </div>
      <div className="illustration-container">
        <div className="image"></div>
      </div>
    </div>
  );
};

export default Extension;
