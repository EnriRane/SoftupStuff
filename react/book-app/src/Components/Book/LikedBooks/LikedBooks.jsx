import Modal from "../../Modal/Modal";
import "./LikedBooks.css";
const LikedBooks = ({ books, onhandleFavBooksAppearance, onLike }) => {
  const favoriteBooks = books.filter((b) => b.liked === true);

  return (
    <Modal>
      <div className="likedBooks">
        <h1 className="likedBooksTitle">My favorite books</h1>
        {favoriteBooks.length === 0 ? (
          <h2>No Favorite books </h2>
        ) : (
          <ul>
            {favoriteBooks.map((book) => (
              <li key={book.name}>
                <div className="favBooks">
                  <img src={book.image} alt="Book" />
                  <div>
                    <h2>{book.title}</h2>
                    <h4>{book.author}</h4>
                  </div>
                  <i
                    onClick={() => onLike(book)}
                    className={
                      book.liked
                        ? "fa-solid fa-heart liked"
                        : "fa-solid fa-heart"
                    }
                  ></i>
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
