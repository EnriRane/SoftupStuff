import "./Book.css";
const Book = ({ book, onLike }) => {
  return (
    <div className="book">
      <img src={book.image} alt="BookImage" />
      <div className="title">
        <h2>{book.title}</h2>
      </div>
      <h3 className="author">{book.author}</h3>
      <div className="price">
        <h3>{book.price} Leke</h3>
      </div>
      <div className="cartAndLike">
        <i
          className={
            book.liked ? "fa-solid fa-heart liked" : "fa-solid fa-heart"
          }
          onClick={() => onLike(book)}
        ></i>
        <button>Add in cart</button>
      </div>
    </div>
  );
};

export default Book;
