import React, { useEffect, useReducer, useState, useCallback } from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookSection from "./Components/Book/BookSection";
import LikedBooks from "./Components/Book/LikedBooks/LikedBooks";
import Cart from "./Components/Cart/Cart";
import NewBook from "./Components/Book/NewBook/NewBook";
import { bookReducer } from "./reducer/bookReducer";
import { cartReducer } from "./reducer/cartReducer";
import BookContext from "./context/BookContext";
import CartContext from "./context/CartContext";
import { getBooks } from "./services/bookService";
import "./App.css";

function App() {
  const [books, dispatchBooks] = useReducer(bookReducer, []);
  const [bookCart, dispatchBookCart] = useReducer(cartReducer, []);
  const [areFavBooksShown, setAreFavBooksShown] = useState(false);
  const [isBookCartShown, setisBookCartShown] = useState(false);
  const [isAddNewBookFormShown, setIsAddNewBookFormShown] = useState(false);
  const [error, setError] = useState(null);
  const fetchBooks = useCallback(async () => {
    try {
      const response = await getBooks();
      if (response.status !== 200) {
        throw new Error("You can't get the movies");
      }
      let books = [];
      for (let book of Object.values(response.data)) {
        books.push(book);
      }
      localStorage.setItem("books", JSON.stringify(books));
      dispatchBooks({
        type: "addAllBooks",
        payload: books,
      });
    } catch (error) {
      setError(error.message);
    }
  }, []);
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleFavBooksAppearance = () => {
    if (areFavBooksShown) {
      setAreFavBooksShown(false);
    } else {
      setAreFavBooksShown(true);
    }
  };
  const handleBookCartAppearance = () => {
    if (isBookCartShown) {
      setisBookCartShown(false);
    } else {
      setisBookCartShown(true);
    }
  };
  const handleBookFormShown = () => {
    if (isAddNewBookFormShown) {
      setIsAddNewBookFormShown(false);
    } else {
      setIsAddNewBookFormShown(true);
    }
  };
  const handleLike = (book) => {
    dispatchBooks({
      type: "changeBookLike",
      payload: book,
    });
  };
  const handleBookCategoryFilter = (category) => {
    dispatchBooks({ type: "filterBooks", payload: category });
  };
  const handleSearchBookByTitle = (title) => {
    dispatchBooks({ type: "searchByTitle", payload: title });
  };
  const handleAddToCart = (book) => {
    dispatchBookCart({ type: "addToCart", payload: book });
  };
  const handleIncreaseQuantity = (book) => {
    dispatchBookCart({ type: "increaseQuantityOfBook", payload: book });
  };
  const handleDecreaseQuantity = (book) => {
    dispatchBookCart({ type: "decreaseQuantityOfBook", payload: book });
  };

  return (
    <React.Fragment>
      {isAddNewBookFormShown && <NewBook onShowNewBook={handleBookFormShown} />}

      {areFavBooksShown && (
        <LikedBooks
          books={books}
          onhandleFavBooksAppearance={handleFavBooksAppearance}
          onLike={handleLike}
        />
      )}

      {isBookCartShown && (
        <Cart
          bookCart={bookCart}
          onhandleBookCartAppearance={handleBookCartAppearance}
          increaseQuantity={handleIncreaseQuantity}
          decreaseQuantity={handleDecreaseQuantity}
        />
      )}
      <div className="app">
        <Header
          onhandleFavBooksAppearance={handleFavBooksAppearance}
          onHandleSearchBookByTitle={handleSearchBookByTitle}
          onHandleBookCart={handleBookCartAppearance}
          onShowNewBook={handleBookFormShown}
        />
        <Dashboard />
        <CartContext.Provider value={[bookCart, handleAddToCart]}>
          <BookContext.Provider value={[books, handleLike]}>
            {error ? (
              <h2>{error}</h2>
            ) : (
              <BookSection
                onHandleBookCategoryFilter={handleBookCategoryFilter}
              />
            )}
          </BookContext.Provider>
        </CartContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
