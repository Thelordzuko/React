
import React from "react";
import GreetingCard from "./GreetingCard";

export default function App() {
  const appStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "50px",
  };

  return (
    <div style={appStyle}>
      <GreetingCard
        name="Tunde"
        message="Have a great day!"
        color="green" 
      />
      <GreetingCard
        name="Amaka"
        message="Keep shining and smiling!"
        color="orange" 
      />
      <GreetingCard
        name="Seyi"
        message="Wishing you success in all your projects!"
      />
    </div>
  );
}
