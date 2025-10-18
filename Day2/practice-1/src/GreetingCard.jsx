import React from "react";
import PropTypes from "prop-types";

export default function GreetingCard({ name, message, color = "teal" }) {
  const cardStyle = {
    backgroundColor: color,
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "black",
    width: "250px",
    
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}

GreetingCard.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  color: PropTypes.string,
};
