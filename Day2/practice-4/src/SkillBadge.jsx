import React from "react";
import PropTypes from "prop-types";

export default function SkillBadge({ skill, level }) {
  const levelColors = {
    Beginner: "#9ca3af", 
    Intermediate: "#3b82f6", 
    Expert: "#22c55e", 
  };

  const badgeStyle = {
    backgroundColor: levelColors[level] || "#ccc",
    color: "#fff",
    borderRadius: "20px",
    padding: "8px 14px",
    margin: "5px",
    display: "inline-block",
    fontSize: "14px",
  };

  return (
    <span style={badgeStyle}>
      {skill} – {level}
    </span>
  );
}

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
