import React from "react";
import PropTypes from "prop-types";

export default function ProfileCard({ children }) {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    width: "320px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
  };

  return <div style={cardStyle}>{children}</div>;
}

ProfileCard.propTypes = {
  children: PropTypes.node.isRequired,
};
