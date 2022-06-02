import React, { useReducer } from 'react';
import { bookReducer } from '../reducer/bookReducer';
import { getBooks } from '../services/bookService';
const BookContext = React.createContext();
BookContext.displayName = 'BookContext';

export const BookProvider = ({ children }) => {
  const [books, dispatchBooks] = useReducer(bookReducer, []);
  const handleLike = (book) => {
    dispatchBooks({
      type: 'changeBookLike',
      payload: book
    });
  };
  const getAllBooks = async () => {
    const bookData = await getBooks();
    let books = [];
    for (let key of Object.keys(bookData)) {
      books.push({ ...bookData[key], _id: key });
    }

    dispatchBooks({
      type: 'addAllBooks',
      payload: books
    });
  };
  return (
    <BookContext.Provider value={{ books, handleLike, dispatchBooks, getAllBooks }}>
      {children}
    </BookContext.Provider>
  );
};
export default BookContext;
