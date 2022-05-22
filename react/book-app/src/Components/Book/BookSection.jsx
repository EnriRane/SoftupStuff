import BookList from "./BookList/BookList";
import "./BookSection.css";
const BookSection = ({ onHandleBookCategoryFilter }) => {
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
