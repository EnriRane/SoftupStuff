import { useContext } from "react";
import Book from "../BookItem/Book";
import BookContext from "../../../context/BookContext";
import "./BookList.css";
const BookList = () => {
  const [books, handleLike] = useContext(BookContext);
  console.log(books);
  return (
    <div className="bookList">
      {books[0] === undefined ? (
        <h1>No books found</h1>
      ) : (
        <ul>
          {books.map((book) => (
            <Book key={Math.random()} book={book} onLike={handleLike} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
