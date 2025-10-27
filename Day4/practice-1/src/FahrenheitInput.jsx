import React from "react";

function FahrenheitInput({ value, onFahrenheitChange }) {
  
  return (
    <div style={{ margin: "10px" }}>
      <label>
        Fahrenheit: 
        <input
          type="number"
          value={value}
          onChange={(e) => onFahrenheitChange(e.target.value)}
          placeholder="Enter Fahrenheit"
          style={{ padding: "5px" }}
        />
      </label>
    </div>
  );
}

export default FahrenheitInput;
