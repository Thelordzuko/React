import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

export default function App() {
  const products = [
    {
      name: "Laptop Computer",
      price: 450000,
      image: "https://i.pinimg.com/1200x/fe/f7/b3/fef7b3cbaeb59afc974ab04dd20741e6.jpg",
      inStock: true,
    },
    {
      name: "Bluetooth Headphones",
      price: 35000,
      image: "https://i.pinimg.com/736x/c6/d1/db/c6d1dbf17ff28fc1372963f45f55ccf0.jpg",
      inStock: false,
    },
    {
      name: "Smartphone",
      price: 280000,
      image: "https://i.pinimg.com/736x/72/1b/7a/721b7ace987f64cab82d511b7837a8cc.jpg",
      inStock: true,
    },
  ];

  const appStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "50px",
  };

  return (
    <div style={appStyle}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
