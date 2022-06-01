import BookList from './BookList/BookList';
import React, { useContext } from 'react';
import './BookSection.css';
import BookContext from '../../context/BookContext';
const BookSection = () => {
  // A better solution would be :
  //- not dispatching the category but creating the event handlers in here
  //
  // const handleFilter = (category) => {
  //   let filteredBooks = [...books];
  //   if (category) {
  //     filteredBooks = books.filter((b) => b.category === category);
  // }
  const dispatchBooks = useContext(BookContext)[2];
  const handleBookCategoryFilter = (category) => {
    dispatchBooks({ type: 'filterBooks', payload: category });
  };
  return (
    <div>
      <div className="bookSection">
        <h1>List of books...</h1>
        <div className="categories">
          <h2 onClick={() => handleBookCategoryFilter('allBooks')} id="foreign">
            All books
          </h2>
          <h2 onClick={() => handleBookCategoryFilter('albanian')} id="albanian">
            Albanian Titles
          </h2>
          <h2 onClick={() => handleBookCategoryFilter('foreign')} id="foreign">
            Foreign Titles
          </h2>
        </div>
        <BookList />
      </div>
    </div>
  );
};

export default BookSection;
