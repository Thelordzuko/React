import React from "react";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "5px" }}>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.completed ? "☑" : "☐"} {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
