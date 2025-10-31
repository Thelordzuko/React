import React from "react";

function ExpenseStats({ expenses }) {
  // total number of expenses
  const count = expenses.length;

  // total amount spent or the sum of amounts)
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  // highest single expense amount or 0 if none
  const highest = expenses.length ? Math.max(...expenses.map((e) => e.amount)) : 0;

  // breakdown: sum per category -> object like { Food: 3000, Transport: 800, ... }
  const breakdown = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
    return acc;
  }, {});

  // helper to format with Naira sign and commas
  const fmt = (n) => `₦${Number(n).toLocaleString("en-NG")}`;

  return (
    <div className="stats">
      {/* to show total spent and counts */}
      <div className="stat-card">
        <div className="stat-number">{fmt(total)}</div>
        <div className="stat-label">Total Spent</div>
      </div>

      <div className="stat-card">
        <div className="stat-number">{count}</div>
        <div className="stat-label">Expenses</div>
      </div>

      <div className="stat-card">
        <div className="stat-number">{fmt(highest)}</div>
        <div className="stat-label">Highest</div>
      </div>

      {/* this is a small breakdown list */}
      <div className="breakdown">
        {Object.keys(breakdown).map((cat) => (
          <div key={cat} className="break-item">
            <span className="break-cat">{cat}</span>
            <span className="break-amt">{fmt(breakdown[cat])}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseStats;
