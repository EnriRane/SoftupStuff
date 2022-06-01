import React, { useEffect, useReducer, useState, useCallback } from 'react';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import BookSection from './Components/Book/BookSection';
import LikedBooks from './Components/Book/LikedBooks/LikedBooks';
import Cart from './Components/Cart/Cart';
import NewBook from './Components/Book/NewBook/NewBook';
import { bookReducer } from './reducer/bookReducer';
import { cartReducer } from './reducer/cartReducer';
import BookContext from './context/BookContext';
import CartContext from './context/CartContext';
import { getBooks } from './services/bookService';
import { getCart } from './services/cartService';
import './App.css';

function App() {
  const [books, dispatchBooks] = useReducer(bookReducer, []);
  const [bookCart, dispatchBookCart] = useReducer(cartReducer, []);
  const [areFavBooksShown, setAreFavBooksShown] = useState(false);
  const [isBookCartShown, setisBookCartShown] = useState(false);
  const [isAddNewBookFormShown, setIsAddNewBookFormShown] = useState(false);
  const [error, setError] = useState(null);
  const fetchBooksAndCartData = useCallback(async () => {
    try {
      const bookData = await getBooks();
      let books = [];
      for (let key of Object.keys(bookData)) {
        books.push({ ...bookData[key], _id: key });
      }

      dispatchBooks({
        type: 'addAllBooks',
        payload: books
      });
      const cartData = await getCart();

      let cart = [];
      for (let key of Object.keys(cartData)) {
        cart.push({ ...cartData[key], _id: key });
      }

      dispatchBookCart({
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
  const handleLike = (book) => {
    dispatchBooks({
      type: 'changeBookLike',
      payload: book
    });
  };

  return (
    <React.Fragment>
      <BookContext.Provider value={[books, handleLike, dispatchBooks]}>
        {isAddNewBookFormShown && <NewBook onShowNewBook={handleBookFormApperance} />}

        {areFavBooksShown && (
          <LikedBooks
            books={books}
            onhandleFavBooksAppearance={handleFavBooksAppearance}
            onLike={handleLike}
          />
        )}

        <CartContext.Provider value={[bookCart, dispatchBookCart]}>
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
        </CartContext.Provider>
      </BookContext.Provider>
    </React.Fragment>
  );
}

export default App;
