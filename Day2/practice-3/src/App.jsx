import React from "react";
import StateCard from "./StateCard";

export default function App() {
  const appStyle = {
    display: "flex",
    // flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
  };

  return (
    <div style={appStyle}>
      <StateCard
        state="Lagos"
        capital="Ikeja"
        region="West"
        population="14 million"
      >
        National Theatre
      </StateCard>

      <StateCard
        state="Kano"
        capital="Kano"
        region="North"
        population="13 million"
      >
        Kano City Walls
      </StateCard>

      <StateCard
        state="Enugu"
        capital="Enugu"
        region="East"
        population="7 million"
      >
        Ngwo Pine Forest
      </StateCard>

      <StateCard
        state="Rivers"
        capital="Port Harcourt"
        region="South"
        population="10 million"
      >
        Isaac Boro Park
      </StateCard>
    </div>
  );
}
