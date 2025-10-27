import React, { useState } from "react";

function StatesExplorer() {
  const statesData = [
    { name: "Lagos", capital: "Ikeja", region: "South West" },
    { name: "Oyo", capital: "Ibadan", region: "South West" },
    { name: "Kano", capital: "Kano", region: "North West" },
    { name: "Kaduna", capital: "Kaduna", region: "North West" },
    { name: "Enugu", capital: "Enugu", region: "South East" },
    { name: "Anambra", capital: "Awka", region: "South East" },
    { name: "Plateau", capital: "Jos", region: "North Central" },
    { name: "Rivers", capital: "Port Harcourt", region: "South South" },
    { name: "Borno", capital: "Maiduguri", region: "North East" },
    { name: "Edo", capital: "Benin City", region: "South South" },
  ];

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const filteredStates = statesData.filter((state) => {
    const matchesSearch =
      state.name.toLowerCase().includes(search.toLowerCase()) ||
      state.capital.toLowerCase().includes(search.toLowerCase());

    const matchesRegion =
      region === "All" || state.region.toLowerCase().includes(region.toLowerCase());

    return matchesSearch && matchesRegion;
  });

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif", marginTop: "30px" }}>
      <h2>🇳🇬 Nigerian States</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Search:{" "}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter state or capital..."
          />
        </label>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setRegion("All")}>All</button>
        <button onClick={() => setRegion("North")}>North</button>
        <button onClick={() => setRegion("South")}>South</button>
        <button onClick={() => setRegion("East")}>East</button>
        <button onClick={() => setRegion("West")}>West</button>
      </div>

      {filteredStates.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredStates.map((state, index) => (
            <li key={index} style={{ margin: "6px 0" }}>
              {state.name} - Capital: {state.capital} ({state.region})
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "gray" }}>No results found</p>
      )}

      <p>
        Showing {filteredStates.length} of {statesData.length} states
      </p>
    </div>
  );
}

export default StatesExplorer;
