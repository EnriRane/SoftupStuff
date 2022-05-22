import "./Header.css";
import softupLogo from "./softupLogo.png";
const Header = ({ onhandleFavBooksAppearance }) => {
  return (
    <header className="header">
      <div className="searchBar">
        <input
          type="text"
          id="searchByCategory"
          placeholder="Find book by title..."
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="title">
        <img src={softupLogo} alt="Softup Logo" />
        <h1>Softup Library</h1>
      </div>
      <div className="favoritesAndBucket" onClick={onhandleFavBooksAppearance}>
        <div className="favorites">
          <i className="fa-solid fa-heart"></i>
          <p>Favorites</p>
        </div>
        <div className="bucket">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>My cart</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
