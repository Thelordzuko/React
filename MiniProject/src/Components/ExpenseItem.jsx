import React, { useState } from "react";

function ExpenseItem({ expense, onDelete, onEdit }) {
  // local editing state
  const [isEditing, setIsEditing] = useState(false);
  const [editDesc, setEditDesc] = useState(expense.description);
  const [editAmt, setEditAmt] = useState(String(expense.amount));

  // this is a helper to format amount nicely
  const fmt = (n) => `₦${Number(n).toLocaleString("en-NG")}`;

  // when user confirms edit
  const saveEdit = () => {
    // validation
    if (!editDesc || editDesc.trim() === "") return;
    const num = Number(editAmt);
    if (!editAmt || isNaN(num) || num <= 0) return;

    onEdit(editDesc, num); // this calls parent edit handler
    setIsEditing(false); // exit edit mode
  };

  // category-based color class (for small left badge)
  const categoryClass = expense.category.toLowerCase();

  return (
    <div className="expense-item">
      {/* left: colored badge with category */}
      <div className={`cat-badge ${categoryClass}`}>{expense.category}</div>

      {/* middle: description & date / or editing fields */}
      <div className="expense-main">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && saveEdit()}
            />
            <input
              type="number"
              value={editAmt}
              onChange={(e) => setEditAmt(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && saveEdit()}
            />
          </>
        ) : (
          <>
            <div className="expense-desc">{expense.description}</div>
            <div className="expense-meta">
              <span className="expense-date">{expense.date}</span>
              <span className="expense-amt">{fmt(expense.amount)}</span>
            </div>
          </>
        )}
      </div>

      {/* right: action buttons */}
      <div className="expense-actions">
        {isEditing ? (
          <>
            <button className="btn" onClick={saveEdit}>
              Save
            </button>
            <button
              className="btn ghost"
              onClick={() => {
                setIsEditing(false);
                setEditDesc(expense.description);
                setEditAmt(String(expense.amount));
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="btn ghost"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button className="delete-btn" onClick={onDelete}>
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ExpenseItem;
