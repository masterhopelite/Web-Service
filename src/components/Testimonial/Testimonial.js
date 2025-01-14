import React from 'react';
import './Testimonial.css'; // Import the CSS file

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="group">
        <div className="vector"></div>
        <div className="vector"></div>
        <div className="vector"></div>
        <div className="vector"></div>
        <div className="vector"></div>
        <div className="vector"></div>
        <div className="vector"></div>
        <div className="vector"></div>
        <div className="vector"></div>
      </div>

      <div className="clients-container">
        <h1 className="header">What Our Clients Say</h1>

        <div className="content">
          <div className="client">
            <div className="comment">
              <div className="quote">
                <div className="vector"></div>
                <div className="vector"></div>
                <p className="paragraph">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
              </div>

              <div className="name-box">
                <div className="avatar"></div>
                <div className="name-container">
                  <p className="client-name">Oberon Shaw, MCH</p>
                  <p className="client-role">Head of Talent Acquisition, North America</p>
                </div>
              </div>
            </div>
          </div>

          <div className="client">
            <div className="comment">
              <div className="quote">
                <div className="vector"></div>
                <div className="vector"></div>
                <p className="paragraph">Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
              </div>

              <div className="name-box">
                <div className="avatar"></div>
                <div className="name-container">
                  <p className="client-name">Oberon Shaw, MCH</p>
                  <p className="client-role">Head of Talent Acquisition, North America</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider">
        <div className="ellipse"></div>
        <div className="ellipse"></div>
        <div className="ellipse"></div>
      </div>
    </div>
  );
};

export default Testimonial;
