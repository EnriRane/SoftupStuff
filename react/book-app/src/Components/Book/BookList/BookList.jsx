import React from 'react';
import { useContext } from 'react';
import Book from '../BookItem/Book';
import BookContext from '../../../context/BookContext';
import './BookList.css';
import CartContext from '../../../context/CartContext';
import { postToCart } from '../../../services/cartService';
const BookList = () => {
  const [books, handleLike] = useContext(BookContext);
  const dispatchBookCart = useContext(CartContext)[1];

  const handleAddToCart = async (book) => {
    try {
      await postToCart({ ...book, sellQuantity: 1 });

      dispatchBookCart({ type: 'addToCart', payload: book });
    } catch (error) {
      alert('Book was not added to cart');
    }
  };
  return (
    <div className="bookList">
      {books[0] === undefined ? (
        <h1>No books found</h1>
      ) : (
        <ul>
          {books.map((book) => (
            <Book
              key={Math.random()}
              book={book}
              onLike={handleLike}
              onAddToCart={handleAddToCart}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
