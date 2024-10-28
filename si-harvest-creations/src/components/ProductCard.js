// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css"; // Import CSS specific to ProductCard if any

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
    </div>
  );
};

export default ProductCard;
