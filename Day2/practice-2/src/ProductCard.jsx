import React from "react";
import "./ProductCard.css";

export default function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="product-card">
      <div className={`image-container ${!inStock ? "out-of-stock" : ""}`}>
        <img src={image} alt={name} className="product-image" />
        {!inStock && <div className="overlay">Out of Stock</div>}
      </div>

      <h3 className="product-name">{name}</h3>
      <p className="product-price">₦{price.toLocaleString()}</p>

      <p className={`stock-status ${inStock ? "in-stock" : "not-available"}`}>
        {inStock ? "In Stock ✓" : "Out of Stock ✗"}
      </p>
    </div>
  );
}
