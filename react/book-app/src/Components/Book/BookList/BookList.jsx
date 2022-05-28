import React from "react";
import { useContext } from "react";
import Book from "../BookItem/Book";
import BookContext from "../../../context/BookContext";
import "./BookList.css";
import CartContext from "../../../context/CartContext";
const BookList = () => {
  const [books, handleLike] = useContext(BookContext);
  const handleAddToCart = useContext(CartContext)[1];

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
