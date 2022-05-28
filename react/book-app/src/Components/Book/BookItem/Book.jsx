import "./Book.css";
import React from "react";
const Book = ({ book, onLike, onAddToCart }) => {
  return (
    <div className="book">
      <div>
        <img className="image-book" src={book.image} alt="BookImage" />
        <h2 className="title">{book.title}</h2>
        <h5 className="author">{book.author}</h5>
        <div className="price">
          <h5>{book.price} Leke</h5>
        </div>
        <div className="cartAndLike">
          <i
            className={
              book.liked ? "fa-solid fa-heart liked" : "fa-regular fa-heart"
            }
            onClick={() => onLike(book)}
          ></i>
        </div>
        <button className="addToCartButton" onClick={() => onAddToCart(book)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Book;
