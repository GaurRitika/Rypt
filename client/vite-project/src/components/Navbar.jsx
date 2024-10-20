// import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        {/* <h1 className="brand-name">RYPT</h1> */}
      </div>

      {/* Navbar Links */}
      <div className="nav-links">
        <a href="#market" className="nav-btn">Market</a>
        <a href="#exchange" className="nav-btn">Exchange</a>
        <a href="#tutorials" className="nav-btn">Tutorials</a>
        <a href="#wallets" className="nav-btn">Wallets</a>
        <a href="#login" className="login-btn">Login</a>
      </div>
    </div>
  
  );
}

export default Navbar