import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

function TodoApp() {

  const [todos, setTodos] = useState([]);
 
  const [filter, setFilter] = useState("All");

 
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), 
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]); 
  };

 
  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  
  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  
  const total = todos.length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h2> My Todo List</h2>

      <TodoInput addTodo={addTodo} />

      <TodoFilter setFilter={setFilter} />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      <p>
        Total: {total} tasks | Completed: {completedCount}
      </p>
    </div>
  );
}

export default TodoApp;
