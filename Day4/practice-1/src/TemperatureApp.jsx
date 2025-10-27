import React, { useState } from "react";
import CelsiusInput from "./CelciusInput";
import FahrenheitInput from "./FahrenheitInput";

function TemperatureApp() {
    const [celsius, setCelsius] = useState("");
    const toFahrenheit = (c) => (c * 9) / 5 + 32;
    const toCelsius = (f) => ((f - 32) * 5) / 9;

    const handleCelsiusChange = (newCelsius) => {
    setCelsius(newCelsius);
  };

  // 📥 When Fahrenheit changes (user types)
  const handleFahrenheitChange = (newFahrenheit) => {
    const converted = toCelsius(parseFloat(newFahrenheit));
    if (!isNaN(converted)) setCelsius(converted);
    else setCelsius("");
  };

  // 🧾 Show converted values safely
  const fahrenheitValue =
    celsius !== "" ? toFahrenheit(parseFloat(celsius)).toFixed(2) : "";

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h2>🌡️ Temperature Converter</h2>
      <CelsiusInput value={celsius} onCelsiusChange={handleCelsiusChange} />
      <FahrenheitInput
        value={fahrenheitValue}
        onFahrenheitChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default TemperatureApp;
