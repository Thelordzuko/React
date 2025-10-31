import React from "react";

function Header() {
  // produce a nice readable date string (e.g., Friday, January 1, 2025)
  const today = new Date().toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <h1>🪙 Zucode Expense Tracker</h1>
      {/* show today's date below the title */}
      <p className="subtle">{today}</p>
    </header>
  );
}

export default Header;
