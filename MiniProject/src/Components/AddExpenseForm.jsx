import React, { useState } from "react";

function AddExpenseForm({ onAdd }) {
  // I had different local states for the form inputs 
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food"); // food is the default category

  // so after every successful addition, this function clears the form and brings it back to this use state
  const clearForm = () => {
    setDescription("");
    setAmount("");
    setCategory("Food");
  };

  // this runs when a user clicks the "Add" button
  const handleAdd = () => {
    // for basic validation: ensure description is not empty and amount > 0
    if (!description || description.trim() === "") return;
    const num = Number(amount);
    if (!amount || isNaN(num) || num <= 0) return;

    // call parent callback to actually add the expense
    onAdd(description, num, category);

    // reset local inputs
    clearForm();
  };

  return (
    <div className="add-form">
      {/* for the description input */}
      <input
        type="text"
        placeholder="e.g., Shopping"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* for the amount input */}
      <input
        type="number"
        placeholder="Amount (₦)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* for the category dropdown */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Others</option>
      </select>

      {/* add button */}
      <button className="btn" onClick={handleAdd}>
        Add Expense
      </button>
    </div>
  );
}

export default AddExpenseForm;
