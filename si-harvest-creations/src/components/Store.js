// src/components/Store.js
import React from "react";
import "./Store.css"; // Import styles

const Store = () => {
  return (
    <div className="store-container">
      <header className="store-header">
        <h1>Welcome to SihleHarvest Creations Store</h1>
        <p>Your destination for fresh vegetables, farming tools, and more!</p>
      </header>

      <section className="store-intro">
        <p>
          We are committed to sustainable farming practices and supporting local
          agriculture. Browse our selection of high-quality, fresh products
          straight from our fields to your table.
        </p>
      </section>

      <section className="product-listing">
        <h2>Our Products</h2>
        <p>
          Check back soon for a variety of fresh vegetables and essential
          farming tools.
        </p>
        {/* Product listings will be added here */}
      </section>
    </div>
  );
};

export default Store;
