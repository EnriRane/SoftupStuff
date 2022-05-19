import React from "react";
import TodoItem from "./todoItem/todoItem";
import "./TodoList.css";
const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="todolist">
      {todos.map((todo) => (
        <li key={todo._id}>
          {<TodoItem todo={todo} onDeleteTodo={onDeleteTodo} />}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
