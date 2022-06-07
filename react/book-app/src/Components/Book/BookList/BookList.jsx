import React from 'react';
import { useContext } from 'react';
import Book from '../BookItem/Book';
import BookContext from '../../../context/BookContext';
import './BookList.css';
import { postToCart } from '../../../services/cartService';
import { useDispatch, useSelector } from 'react-redux';
const BookList = () => {
  const dispatch = useDispatch();

  const { handleLike } = useContext(BookContext);
  const books = useSelector((state) => state.books);

  const handleAddToCart = async (book) => {
    try {
      await postToCart({ ...book, sellQuantity: 1 });

      dispatch({ type: 'addToCart', payload: book });
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
