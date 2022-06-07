import React, { useEffect, useState, useCallback, useContext } from 'react';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import BookSection from './Components/Book/BookSection';
import LikedBooks from './Components/Book/LikedBooks/LikedBooks';
import Cart from './Components/Cart/Cart';
import NewBook from './Components/Book/NewBook/NewBook';
import BookContext from './context/BookContext';
import { getCart } from './services/cartService';
import { getBooks } from './services/bookService';

import './App.css';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const { handleLike } = useContext(BookContext);

  const [areFavBooksShown, setAreFavBooksShown] = useState(false);
  const [isBookCartShown, setisBookCartShown] = useState(false);
  const [isAddNewBookFormShown, setIsAddNewBookFormShown] = useState(false);
  const [error, setError] = useState(null);
  const fetchBooksAndCartData = useCallback(async () => {
    try {
      const bookData = await getBooks();
      let books = [];
      if (bookData) {
        for (let key of Object.keys(bookData)) {
          books.push({ ...bookData[key], _id: key });
        }
      }
      dispatch({
        type: 'addAllBooks',
        payload: books
      });

      const cartData = await getCart();
      let cart = [];
      if (cartData) {
        for (let key of Object.keys(cartData)) {
          cart.push({ ...cartData[key], _id: key });
        }
      }
      dispatch({
        type: 'addAllItemsToCart',
        payload: cart
      });
    } catch (error) {
      console.log(error);
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
        <LikedBooks onhandleFavBooksAppearance={handleFavBooksAppearance} onLike={handleLike} />
      )}

      {isBookCartShown && <Cart onhandleBookCartAppearance={handleBookCartAppearance} />}
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
