import React from "react";
import PropTypes from "prop-types";

export default function ProfileHeader({ name, title, avatar }) {
  const headerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #0d9488",
    marginBottom: "10px",
  };

  return (
    <div style={headerStyle}>
      <img src={avatar} alt={name} style={avatarStyle} />
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
