import React, { useState } from "react";
import "./todoItem.css";

const TodoItem = ({ todo, onDeleteTodo }) => {
  const [isDecorated, setIsDecorated] = useState(false);
  const changeDecoration = () => {
    isDecorated ? setIsDecorated(false) : setIsDecorated(true);
  };
  return (
    <div className="todoItem">
      <h2 className={isDecorated ? "decoratedText" : ""}>{todo.name}</h2>
      <div>
        <button
          id={
            isDecorated ? "textdecorationButtonClicked" : "textdecorationButton"
          }
          onClick={changeDecoration}
        >
          <i className="fa-solid fa-check"></i>
        </button>
        <button id="delete" onClick={() => onDeleteTodo(todo)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
