
import React from 'react';
import './Navbar.css';
// import vector.svg from './';
import vector from './vector.svg';
import logo from './logo.svg'
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo"><img src={logo} alt="" />
        <div className="logo-icon"></div>
        <div className="logo-text">Whitespace</div>
      </div>
      <nav className="navbar-menu">
        <div className="nav-item">
          <span>Products</span>
          <div className="dropdown-arrow"><img src={vector} alt="" /></div>
        </div>
        <div className="nav-item">
          <span>Solutions</span>
          <div className="dropdown-arrow"><img src={vector} alt="" /></div>
        </div>
        <div className="nav-item">
          <span>Resources</span>
          <div className="dropdown-arrow"><img src={vector} alt="" /></div>
        </div>
        <div className="nav-item">
          <span>Pricing</span>
          <div className="dropdown-arrow"><img src={vector} alt="" /></div>
        </div>
      </nav>
      <div className="navbar-buttons">
        <button className="btn-login">Login</button>
        <button className="btn-free-trial">Try Whitespace Free</button>
      </div>
    </header>
  );
};

export default Navbar;