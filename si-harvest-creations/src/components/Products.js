// src/components/Products.jsx
import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css"; // Import the CSS for styling

const productsData = [
  {
    id: 1,
    name: "Organic Fertilizer",
    description: "Enhances soil quality and boosts crop yields.",
    price: "R 300", // Adjusted to Rand
  },
  {
    id: 2,
    name: "High-Yield Seeds",
    description: "Carefully selected seeds for maximum yield.",
    price: "R 450", // Adjusted to Rand
  },
  {
    id: 3,
    name: "Farming Tools Set",
    description: "Essential tools for every farmer.",
    price: "R 750", // Adjusted to Rand
  },
];

const Products = () => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <p>Discover our high-quality products to enhance your farming.</p>
      <div className="product-list">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
