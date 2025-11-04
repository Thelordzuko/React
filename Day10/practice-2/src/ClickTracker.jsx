import { useRef, useState } from "react";

function ClickTracker() {
  // useRef for tracking clicks (does not cause re-render)
  const clickRef = useRef(0);

  // useState counter (causes re-render)
  const [stateCount, setStateCount] = useState(0);

  // Track how many times the component re-rendered
  const renderCount = useRef(1);
  renderCount.current += 1;

  // Increment ref count (no re-render)
  function handleRefClick() {
    clickRef.current += 1;
    console.log("Ref Count:", clickRef.current);
  }

  // Show total ref count in alert
  function handleShowTotal() {
    alert(`Total clicks (ref): ${clickRef.current}`);
  }

  // Increment state counter (causes re-render)
  function handleStateClick() {
    setStateCount(stateCount + 1);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Click Counter (useRef - No Re-renders)</h2>
      <button onClick={handleRefClick}>Count Clicks</button>
      <button onClick={handleShowTotal} style={{ marginLeft: "8px" }}>
        Show Total
      </button>

      <h2 style={{ marginTop: "40px" }}>State Counter (Re-renders)</h2>
      <p>Clicks: {stateCount}</p>
      <button onClick={handleStateClick}>Click Me</button>

      <p style={{ marginTop: "20px", color: "gray" }}>
        Render Count: {renderCount.current}
      </p>
    </div>
  );
}

export default ClickTracker;
