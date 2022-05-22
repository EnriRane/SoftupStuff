import BookList from "./BookList/BookList";
import "./BookSection.css";
const BookSection = () => {
  return (
    <div>
      <div className="bookSection">
        <h1>List of books...</h1>
        <div className="categories">
          <h2 id="albanian"> Albanian Titles</h2>
          <h2 id="foreign"> Foreign Titles</h2>
        </div>
        <BookList />
      </div>
    </div>
  );
};

export default BookSection;
