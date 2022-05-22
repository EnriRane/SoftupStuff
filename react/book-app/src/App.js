import { useEffect, useReducer } from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookSection from "./Components/Book/BookSection";
import { bookReducer } from "./reducer/bookReducer";
import BookContext from "./context/BookContext";
import allBooks from "./books.json";
import "./App.css";

function App() {
  const [books, dispatchBooks] = useReducer(bookReducer, []);
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(allBooks.books));
    dispatchBooks({
      type: "addAllBooks",
      payload: JSON.parse(localStorage.getItem("books")),
    });
  }, []);
  const handleLike = (book) => {
    dispatchBooks({
      type: "changeBookLike",
      payload: book,
    });
  };
  return (
    <div className="app">
      <Header />
      <Dashboard />
      <BookContext.Provider value={[books, handleLike]}>
        <BookSection />
      </BookContext.Provider>
    </div>
  );
}

export default App;
