// src/components/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-description">
              We are committed to providing quality agricultural products to
              enhance farming productivity. At SihleHarvest Creations, we
              believe in sustainable farming practices and supporting local
              communities.
            </p>
            <div className="about-features">
              <div className="feature">
                <h3>Quality Products</h3>
                <p>Premium agricultural solutions for optimal results.</p>
              </div>
              <div className="feature">
                <h3>Expert Support</h3>
                <p>Professional guidance for your farming needs.</p>
              </div>
            </div>
          </div>
          <div className="about-image-wrapper">
            <img
              src="/images/vegi.jpg"
              alt="About SihleHarvest Creations"
              className="about-image"
              onError={(e) => {
                console.log("Image failed to load");
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
