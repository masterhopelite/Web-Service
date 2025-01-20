import React from 'react';
import './Footer.css'; // Include your CSS file if not using inline styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Description */}
        <div className="logo-description">
          <div className="logo">
            <div className="logo-icon"></div>
            <span className="logo-text">whitepace</span>
          </div>
          <p className="description">
            whitepace was created for the new ways we live and work. We make better workspaces around the world.
          </p>
        </div>

        {/* Info Sections */}
        <div className="info-sections">
          <div className="info-section">
            <h3 className="section-title">Product</h3>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer Stories</li>
            </ul>
          </div>
          <div className="info-section">
            <h3 className="section-title">Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Guides & Tutorials</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="info-section">
            <h3 className="section-title">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="cta">
          <h2>Try It Today</h2>
          <p>Get started for free. Add your whole team as your needs grow.</p>
          <button className="cta-button">Start Today</button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="terms">
          <span>©2021 Whitepace LLC.</span>
          <span>Terms & Privacy</span>
          <span>Security</span>
          <span>Status</span>
        </div>
        <div className="social-icons">
          <div className="icon facebook"></div>
          <div className="icon twitter"></div>
          <div className="icon linkedin"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
