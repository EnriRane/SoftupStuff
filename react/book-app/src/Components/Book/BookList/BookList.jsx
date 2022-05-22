import { useContext } from "react";
import Book from "../BookItem/Book";
import BookContext from "../../../context/BookContext";
import "./BookList.css";
const BookList = () => {
  const [books, handleLike] = useContext(BookContext);

  return (
    <div className="bookList">
      <ul>
        {books.map((book) => (
          <Book key={Math.random()} book={book} onLike={handleLike} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
