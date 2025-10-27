import React from "react";

function CelsiusInput({ value, onCelsiusChange }) {

  return (
    <div style={{ margin: "10px" }}>
      <label>
        Celsius:
        <input
          type="number"
          value={value}
          onChange={(e) => onCelsiusChange(e.target.value)}
          placeholder="Enter Celsius"
          style={{ padding: "5px" }}
        />
      </label>
    </div>
  );
}

export default CelsiusInput;
