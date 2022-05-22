import React, { useEffect, useReducer, useState } from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookSection from "./Components/Book/BookSection";
import LikedBooks from "./Components/Book/LikedBooks/LikedBooks";
import { bookReducer } from "./reducer/bookReducer";
import BookContext from "./context/BookContext";
import allBooks from "./books.json";
import "./App.css";

function App() {
  const [books, dispatchBooks] = useReducer(bookReducer, []);
  const [areFavBooksShown, setAreFavBooksShown] = useState(false);
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
  const handleFavBooksAppearance = () => {
    if (areFavBooksShown) {
      setAreFavBooksShown(false);
    } else {
      setAreFavBooksShown(true);
    }
  };
  console.log(books);
  return (
    <React.Fragment>
      {areFavBooksShown && (
        <LikedBooks
          books={books}
          onhandleFavBooksAppearance={handleFavBooksAppearance}
        />
      )}

      <div className="app">
        <Header onhandleFavBooksAppearance={handleFavBooksAppearance} />
        <Dashboard />
        <BookContext.Provider value={[books, handleLike]}>
          <BookSection />
        </BookContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
