// src/components/Blog.js

import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <p>
        Welcome to our blog! Here we share tips on sustainable farming, recipes
        using our vegetables, and updates on our farming practices.
      </p>
      <p>Stay tuned for more posts!</p>

      <div className="blog-posts">
        <div className="blog-post">
          <h2>Tip for Sustainable Farming</h2>
          <p>
            Sustainable farming techniques are essential for preserving the
            environment. Consider crop rotation, organic fertilizers, and
            integrated pest management.
          </p>
        </div>
        <div className="blog-post">
          <h2>Delicious Vegetable Recipes</h2>
          <p>
            Discover delicious recipes using fresh vegetables from your garden.
            Check back for our upcoming recipe posts!
          </p>
        </div>
        <div className="blog-post">
          <h2>Farming Practices Update</h2>
          <p>
            We are constantly evolving our farming practices to ensure quality
            and sustainability. Learn more about our latest methods and
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
