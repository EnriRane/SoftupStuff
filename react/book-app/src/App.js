import React, { useEffect, useReducer, useState } from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookSection from "./Components/Book/BookSection";
import LikedBooks from "./Components/Book/LikedBooks/LikedBooks";
import Cart from "./Components/Cart/Cart";
import { bookReducer } from "./reducer/bookReducer";
import { cartReducer } from "./reducer/cartReducer";
import BookContext from "./context/BookContext";
import CartContext from "./context/CartContext";
import allBooks from "./books.json";
import "./App.css";

function App() {
  const [books, dispatchBooks] = useReducer(bookReducer, []);
  const [bookCart, dispatchBookCart] = useReducer(cartReducer, []);
  const [areFavBooksShown, setAreFavBooksShown] = useState(false);
  const [isBookCartShown, setisBookCartShown] = useState(false);
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
  const handleBookCategoryFilter = (category) => {
    dispatchBooks({ type: "filterBooks", payload: category });
  };
  const handleSearchBookByTitle = (title) => {
    dispatchBooks({ type: "searchByTitle", payload: title });
  };
  const handleAddToCart = (book) => {
    dispatchBookCart({ type: "addToCart", payload: book });
  };
  const handleBookCartAppearance = () => {
    if (isBookCartShown) {
      setisBookCartShown(false);
    } else {
      setisBookCartShown(true);
    }
  };
  const handleIncreaseQuantity = (book) => {
    dispatchBookCart({ type: "increaseQuantityOfBook", payload: book });
  };
  const handleDecreaseQuantity = (book) => {
    dispatchBookCart({ type: "decreaseQuantityOfBook", payload: book });
  };
  return (
    <React.Fragment>
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
        />
        <Dashboard />
        <CartContext.Provider value={[bookCart, handleAddToCart]}>
          <BookContext.Provider value={[books, handleLike]}>
            <BookSection
              onHandleBookCategoryFilter={handleBookCategoryFilter}
            />
          </BookContext.Provider>
        </CartContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
