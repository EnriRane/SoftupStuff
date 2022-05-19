import React, { useState } from "react";
import "./AddTodoForm.css";

const TodoForm = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState({ name: "", _id: "2" });
  const [error, setError] = useState("");

  const checkTodo = (event) => {
    const todoName = event.target.value;

    todoName.length === 0
      ? setError("Todo name cannot be an empty string")
      : setError("");

    setNewTodo({ name: todoName, _id: (Math.random() * 100).toString() });
  };

  const addNewTodo = (event) => {
    event.preventDefault();
    if (newTodo.name.length === 0) {
      setError("Todo name cannot be an empty string");
      return;
    }
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
    setNewTodo({ name: "", _id: "2" });
  };

  return (
    <form onSubmit={addNewTodo} className="todoForm">
      <label htmlFor="addTodo">Add todo</label>
      <input
        type="text"
        id="addTodo"
        value={newTodo.name}
        placeholder="Add new Todo..."
        onChange={checkTodo}
      />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
