function RGBSlider({ label, value, onChange }) {
  const handleSliderChange = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <div style={styles.wrapper}>
      <label style={styles.label}>
        {label}: <span style={styles.value}>[{value}]</span>
      </label>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={handleSliderChange}
        style={styles.slider}
      />
    </div>
  );
}

const styles = {
  wrapper: {
    margin: "10px 0",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  value: {
    fontWeight: "bold",
  },
  slider: {
    width: "100%",
    
  },
};

export default RGBSlider;