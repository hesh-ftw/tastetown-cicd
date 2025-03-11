// components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Taste Town</div>
      <div className="nav-icons">
        <button className="icon-button">
          <i className="fas fa-search"></i>
        </button>
        <button className="icon-button">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="icon-button">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;