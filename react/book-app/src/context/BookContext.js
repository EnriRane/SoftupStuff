import React from 'react';
import { useDispatch } from 'react-redux';

const BookContext = React.createContext();
BookContext.displayName = 'BookContext';

export const BookProvider = ({ children }) => {
  const dispatch = useDispatch();
  const handleLike = (book) => {
    dispatch({
      type: 'changeBookLike',
      payload: book
    });
  };

  return <BookContext.Provider value={{ handleLike }}>{children}</BookContext.Provider>;
};
export default BookContext;
