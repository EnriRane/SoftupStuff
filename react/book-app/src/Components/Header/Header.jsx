import { useState } from "react";
import "./Header.css";
import softupLogo from "./softupLogo.png";
const Header = ({
  onhandleFavBooksAppearance,
  onHandleSearchBookByTitle,
  onHandleBookCart,
}) => {
  const [userSearchInput, setUserSearchInput] = useState("");
  const handleUserInput = (event) => {
    setUserSearchInput(event.target.value);
  };
  return (
    <header className="header">
      <div className="searchBar">
        <input
          type="text"
          id="searchByCategory"
          placeholder="Find book by title..."
          value={userSearchInput}
          onChange={handleUserInput}
        />
        <button onClick={() => onHandleSearchBookByTitle(userSearchInput)}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="title">
        <img src={softupLogo} alt="Softup Logo" />
        <h1>Softup Library</h1>
      </div>
      <div className="favoritesAndBucket">
        <div className="favorites" onClick={onhandleFavBooksAppearance}>
          <i className="fa-solid fa-heart"></i>
          <p>Favorites</p>
        </div>
        <div className="bucket" onClick={onHandleBookCart}>
          <i className="fa-solid fa-cart-shopping"></i>
          <p>My cart</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
