import React, { useEffect, useState, useCallback, useContext } from 'react';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import BookSection from './Components/Book/BookSection';
import LikedBooks from './Components/Book/LikedBooks/LikedBooks';
import Cart from './Components/Cart/Cart';
import NewBook from './Components/Book/NewBook/NewBook';
import BookContext from './context/BookContext';
import CartContext from './context/CartContext';

import './App.css';

function App() {
  const { books, handleLike, getAllBooks } = useContext(BookContext);
  const { bookCart, getAllCartData } = useContext(CartContext);
  const [areFavBooksShown, setAreFavBooksShown] = useState(false);
  const [isBookCartShown, setisBookCartShown] = useState(false);
  const [isAddNewBookFormShown, setIsAddNewBookFormShown] = useState(false);
  const [error, setError] = useState(null);
  const fetchBooksAndCartData = useCallback(async () => {
    try {
      await getAllBooks();
      await getAllCartData();
    } catch (error) {
      setError(error.message);
    }
  }, []);
  useEffect(() => {
    fetchBooksAndCartData();
  }, [fetchBooksAndCartData]);

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
  const handleBookFormApperance = () => {
    if (isAddNewBookFormShown) {
      setIsAddNewBookFormShown(false);
    } else {
      setIsAddNewBookFormShown(true);
    }
  };
  return (
    <React.Fragment>
      {isAddNewBookFormShown && <NewBook onShowNewBook={handleBookFormApperance} />}

      {areFavBooksShown && (
        <LikedBooks
          books={books}
          onhandleFavBooksAppearance={handleFavBooksAppearance}
          onLike={handleLike}
        />
      )}

      {isBookCartShown && (
        <Cart bookCart={bookCart} onhandleBookCartAppearance={handleBookCartAppearance} />
      )}
      <div className="app">
        <Header
          onhandleFavBooksAppearance={handleFavBooksAppearance}
          onHandleBookCart={handleBookCartAppearance}
          onShowNewBook={handleBookFormApperance}
        />
        <Dashboard />
        {error ? <h2>{error}</h2> : <BookSection />}
      </div>
    </React.Fragment>
  );
}

export default App;
