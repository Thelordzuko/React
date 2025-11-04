import { useState, useRef, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // time in seconds
  const intervalRef = useRef(null);
  const [laps, setLaps] = useState([]);

  // Format time as MM:SS
  function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function startTimer() {
    // Prevent multiple intervals
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
    setLaps([]);
  }

  function addLap() {
    setLaps((prev) => [...prev, formatTime(time)]);
  }

  // Cleanup when component unmounts
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>⏱️ Stopwatch</h2>
      <h1>{formatTime(time)}</h1>

      <div style={{ marginTop: "10px" }}>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer} style={{ marginLeft: "8px" }}>
          Stop
        </button>
        <button onClick={resetTimer} style={{ marginLeft: "8px" }}>
          Reset
        </button>
        <button onClick={addLap} style={{ marginLeft: "8px" }}>
          Lap
        </button>
      </div>

      {laps.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Lap Times</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {laps.map((lap, index) => (
              <li key={index}>Lap {index + 1}: {lap}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Stopwatch;
