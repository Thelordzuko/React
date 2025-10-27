import React from "react";

function TodoFilter({ setFilter }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>Filter: </span>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
    </div>
  );
}

export default TodoFilter;
