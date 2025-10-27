import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTodo(text);
    setText(""); 
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
        style={{ padding: "5px", width: "200px" }}
      />
      <button onClick={handleAdd} style={{ marginLeft: "5px" }}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
