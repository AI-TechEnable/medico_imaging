// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './ProductCard.css'; // Create a CSS file for product card styles

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <Link to={`/products/${product.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
