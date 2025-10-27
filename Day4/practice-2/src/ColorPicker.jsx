import { useState } from "react";
import RGBSlider from "./RGBSlider.jsx";
import ColorDisplay from "./ColorDisplay.jsx";

function ColorPicker() {
  const [color, setColor] = useState({ r: 255, g: 100, b: 50 });

  const handleChange = (key, value) => {
    setColor(prev => ({ ...prev, [key]: value }));
  };

  const { r, g, b } = color;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    alert(`Copied ${hex} to clipboard!`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Color Picker</h2>

      <RGBSlider label="Red" value={r} onChange={val => handleChange("r", val)} />
      <RGBSlider label="Green" value={g} onChange={val => handleChange("g", val)} />
      <RGBSlider label="Blue" value={b} onChange={val => handleChange("b", val)} />

      <ColorDisplay r={r} g={g} b={b} hex={hex} />

      <button onClick={copyToClipboard} style={styles.button}>
        Copy Hex
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    marginBottom: "20px",
  },
  button: {
    marginTop: "15px",
    padding: "8px 14px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ColorPicker;