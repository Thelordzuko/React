// src/components/ProfileStats.jsx
import React from "react";
import PropTypes from "prop-types";

export default function ProfileStats({ projects, followers, following }) {
  const container = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  };

  const statStyle = {
    cursor: "pointer",
  };

  const handleHover = (e, color) => {
    e.target.style.color = color;
  };

  return (
    <div style={container}>
      <p
        style={statStyle}
        onMouseEnter={(e) => handleHover(e, "#0d9488")}
        onMouseLeave={(e) => handleHover(e, "#000")}
      >
        Projects: {projects}
      </p>
      <p
        style={statStyle}
        onMouseEnter={(e) => handleHover(e, "#0d9488")}
        onMouseLeave={(e) => handleHover(e, "#000")}
      >
        Followers: {followers}
      </p>
      <p
        style={statStyle}
        onMouseEnter={(e) => handleHover(e, "#0d9488")}
        onMouseLeave={(e) => handleHover(e, "#000")}
      >
        Following: {following}
      </p>
    </div>
  );
}

ProfileStats.propTypes = {
  projects: PropTypes.number.isRequired,
  followers: PropTypes.string.isRequired,
  following: PropTypes.number.isRequired,
};
