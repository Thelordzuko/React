import React from "react";
import PropTypes from "prop-types";

export default function StateCard({ state, capital, region, population, children }) {

  const regionColors = {
    North: "#8B4513",
    South: "#008751",
    East: "#FFD700",
    West: "#4169E1",
  };

  const cardStyle = {
    backgroundColor: regionColors[region] || "#ccc",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={cardStyle}>
      <h2>{state} State</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population}</p>
      {children && <p><strong>Landmark:</strong> {children}</p>}
    </div>
  );
}

StateCard.propTypes = {
  state: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  children: PropTypes.node,
};
