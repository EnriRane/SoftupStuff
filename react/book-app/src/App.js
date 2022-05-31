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
import './App.css';
import { deleteFromCart, getCart, postToCart, updateCart } from './services/cartService';

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
        throw new Error("You can't get the books");
      }
      let books = [];
      for (let key of Object.keys(response.data)) {
        books.push({ ...response.data[key], _id: key });
      }

      dispatchBooks({
        type: 'addAllBooks',
        payload: books
      });
      const cartResponse = await getCart();
      if (cartResponse.status !== 200) {
        throw new Error("You can't get the cart items");
      }
      let cart = [];
      for (let key of Object.keys(cartResponse.data)) {
        cart.push({ ...cartResponse.data[key], _id: key });
      }

      dispatchBookCart({
        type: 'addAllItemsToCart',
        payload: cart
      });
    } catch (error) {
      console.log(error);
      setError("You can't get the books ");
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
      type: 'changeBookLike',
      payload: book
    });
  };
  const handleBookCategoryFilter = (category) => {
    dispatchBooks({ type: 'filterBooks', payload: category });
  };
  const handleSearchBookByTitle = (title) => {
    dispatchBooks({ type: 'searchByTitle', payload: title });
  };
  const handleAddToCart = async (book) => {
    try {
      await postToCart({ ...book, sellQuantity: 1 });

      dispatchBookCart({ type: 'addToCart', payload: book });
    } catch (error) {
      alert('Book was not added to cart');
    }
  };
  const handleIncreaseQuantity = async (book) => {
    try {
      let sellQuantity = book.sellQuantity;
      if (sellQuantity === book.quantity || sellQuantity > book.quantity) {
        sellQuantity = book.quantity;
      } else {
        sellQuantity = sellQuantity + 1;
      }
      const updatedBook = { ...book, sellQuantity };
      await updateCart(updatedBook, book._id);
      dispatchBookCart({ type: 'increaseQuantityOfBook', payload: book });
    } catch (error) {
      alert('Quantity was not increased');
    }
  };
  const handleDecreaseQuantity = async (book) => {
    try {
      let sellQuantity = book.sellQuantity;
      if (sellQuantity === 1) {
        await deleteFromCart(book._id);
      } else {
        sellQuantity < 1 ? (sellQuantity = 0) : (sellQuantity = sellQuantity - 1);
        const updatedBook = { ...book, sellQuantity };
        await updateCart(updatedBook, updatedBook._id);
      }
      dispatchBookCart({ type: 'decreaseQuantityOfBook', payload: book });
    } catch (error) {
      alert('Quantity was not decreased');
    }
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
              <BookSection onHandleBookCategoryFilter={handleBookCategoryFilter} />
            )}
          </BookContext.Provider>
        </CartContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
