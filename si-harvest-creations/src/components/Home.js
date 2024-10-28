// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Homee.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to SihleHarvest Creations</h1>
          <p className="hero-subtitle">
            Your trusted source for premium agricultural products and services
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="hero-button primary">
              Explore Products
            </Link>
            <Link to="/contact" className="hero-button secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="/images/about-image.jpg"
            alt="SihleHarvest Farming"
            className="hero-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <h3>Quality Products</h3>
            <p>Premium agricultural solutions for optimal farming results</p>
          </div>
          <div className="feature-card">
            <h3>Expert Support</h3>
            <p>Professional guidance for all your farming needs</p>
          </div>
          <div className="feature-card">
            <h3>Sustainable Practices</h3>
            <p>Environmentally conscious farming methods</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
