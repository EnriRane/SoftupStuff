import Header from "./components/appHeader/appHeader";
import TodoForm from "./components/addTodoForm/AddTodoForm";
import TodoList from "./components/todoList/TodoList";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const deleteTodo = (todo) => {
    setTodos((prevState) => prevState.filter((t) => t.name !== todo.name));
  };
  return (
    <div className="app">
      <Header />
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
