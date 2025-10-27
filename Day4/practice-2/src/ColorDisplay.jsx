function ColorDisplay({ r, g, b, hex }) {
  const colorStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: "100%",
    height: "100px",
    borderRadius: "10px",
    marginTop: "15px",
    border: "1px solid #ccc",
  };

  return (
    <div>
      <p>
        <strong>RGB:</strong> ({r}, {g}, {b})
      </p>
      <p>
        <strong>HEX:</strong> {hex}
      </p>
      <div style={colorStyle}></div>
    </div>
  );
}

export default ColorDisplay;