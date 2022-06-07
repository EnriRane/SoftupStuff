import Modal from '../../Modal/Modal';
import React from 'react';
import './LikedBooks.css';
import { useSelector } from 'react-redux';
const LikedBooks = ({ onhandleFavBooksAppearance, onLike }) => {
  const books = useSelector((state) => state.books);
  const favoriteBooks = books.filter((b) => b.liked === true);
  return (
    <Modal>
      <div className="likedBooks">
        <h1 className="likedBooksTitle">My favourite books</h1>
        {favoriteBooks.length === 0 ? (
          <h2>No Favorite books </h2>
        ) : (
          <ul>
            {favoriteBooks.map((book) => (
              <li key={book.image}>
                <div className="favBooks">
                  <img src={book.image} alt="Book" />
                  <div>
                    <h3>{book.title}</h3>
                    <h5>{book.author}</h5>
                  </div>
                  <div className="likedComponent">
                    <i onClick={() => onLike(book)} className="fa-solid fa-heart liked"></i>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <button onClick={onhandleFavBooksAppearance}>Cancel</button>
      </div>
    </Modal>
  );
};

export default LikedBooks;
