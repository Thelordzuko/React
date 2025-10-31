import React from "react";

function CategoryFilter({ filter, setFilter }) {
  const categories = ["All", "Food", "Transport", "Bills", "Entertainment", "Others"];

  return (
    <div className="category-filter">
      {/* this maps each category to a button */}
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          // highlights the active button with btn class, everyone else will be in ghost style
          className={filter === cat ? "btn" : "btn ghost"}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
