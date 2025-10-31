import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, onEdit }) {
  // if no items, show friendly message 
  if (expenses.length === 0) {
    return <p className="empty-message">No expenses found. Add your first expense.</p>;
  }

  // otherwise map each expense to an ExpenseItem
  return (
    <div className="expense-list">
      {expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          expense={exp}
          onDelete={() => onDelete(exp.id)}
          onEdit={(newDesc, newAmt) => onEdit(exp.id, newDesc, newAmt)}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
