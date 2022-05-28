import BookList from "./BookList/BookList";
import React from "react";
import "./BookSection.css";
const BookSection = ({ onHandleBookCategoryFilter }) => {
  // A better solution would be :
  //- not dispatching the category but creating the event handlers in here
  //
  // const handleFilter = (category) => {
  //   let filteredBooks = [...books];
  //   if (category) {
  //     filteredBooks = books.filter((b) => b.category === category);
  // }
  return (
    <div>
      <div className="bookSection">
        <h1>List of books...</h1>
        <div className="categories">
          <h2
            onClick={() => onHandleBookCategoryFilter("allBooks")}
            id="foreign"
          >
            All books
          </h2>
          <h2
            onClick={() => onHandleBookCategoryFilter("albanian")}
            id="albanian"
          >
            Albanian Titles
          </h2>
          <h2
            onClick={() => onHandleBookCategoryFilter("foreign")}
            id="foreign"
          >
            Foreign Titles
          </h2>
        </div>
        <BookList />
      </div>
    </div>
  );
};

export default BookSection;
