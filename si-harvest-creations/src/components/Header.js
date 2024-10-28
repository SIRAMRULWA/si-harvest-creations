// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          SihleHarvest Creations
        </Link>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`nav-menu ${isMenuOpen ? "active" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={handleLinkClick}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/store" onClick={handleLinkClick}>
                Store
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleLinkClick}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
