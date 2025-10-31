// App.jsx - Main parent (holds all state)
// Save as: src/App.jsx

import React, { useState } from "react";
import Header from "./Components/Header";
import AddExpenseForm from "./Components/AddExpenseForm";
import CategoryFilter from "./Components/CategoryFilter";
import ExpenseStats from "./Components/ExpenseStats";
import ExpenseList from "./Components/ExpenseList";
import "./ExpenseTracker.css"; // styles for the whole app

// Start of main App component
function App() {
  // --- 1) hard-coded starting expenses (so app is not empty) ---
  // each item: id, description, amount (number), category, date (ISO string)
  const initialExpenses = [
    {
      id: 1,
      description: "Lunch at Mama Put",
      amount: 1500,
      category: "Food",
      date: "2025-01-15",
    },
    {
      id: 2,
      description: "Uber to work",
      amount: 800,
      category: "Transport",
      date: "2025-01-16",
    },
    {
      id: 3,
      description: "Electricity bill",
      amount: 12000,
      category: "Bills",
      date: "2025-01-10",
    },
    {
      id: 4,
      description: "Movie night",
      amount: 2000,
      category: "Entertainment",
      date: "2025-01-20",
    },
  ];

  // --- 2) state: expenses array (parent is single source of truth) ---
  const [expenses, setExpenses] = useState(initialExpenses);

  // --- 3) state: category filter (All or specific category) ---
  const [filter, setFilter] = useState("All");

  // --- 4) addExpense: called by AddExpenseForm to add a new expense ---
  const addExpense = (description, amount, category) => {
    // validation: no empty description, amount > 0
    if (!description || description.trim() === "") return;
    if (!amount || isNaN(amount) || Number(amount) <= 0) return;

    const newExpense = {
      id: Date.now(), // simple unique id
      description: description.trim(),
      amount: Number(amount),
      category,
      date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
    };

    // add to the array (append)
    setExpenses((prev) => [...prev, newExpense]);
  };

  // --- 5) deleteExpense: remove by id ---
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  // --- 6) editExpense: change description/amount for an existing expense ---
  const editExpense = (id, newDescription, newAmount) => {
    if (!newDescription || newDescription.trim() === "") return;
    if (!newAmount || isNaN(newAmount) || Number(newAmount) <= 0) return;

    setExpenses((prev) =>
      prev.map((e) =>
        e.id === id
          ? { ...e, description: newDescription.trim(), amount: Number(newAmount) }
          : e
      )
    );
  };

  // --- 7) filtered list: apply category filter before sending to list ---
  const visibleExpenses =
    filter === "All" ? expenses : expenses.filter((e) => e.category === filter);

  // --- 8) render UI and pass callbacks / data to children ---
  return (
    <div className="expense-app">
      {/* header with title and date */}
      <Header />

      {/* controls: add form on left, category filter on right (stack on small screens) */}
      <div className="controls">
        <AddExpenseForm onAdd={addExpense} />
        <CategoryFilter filter={filter} setFilter={setFilter} />
      </div>

      {/* statistics card */}
      <ExpenseStats expenses={expenses} />

      {/* expense list */}
      <div className="list-wrapper">
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={deleteExpense}
          onEdit={editExpense}
        />
      </div>
    </div>
  );
}

export default App;
