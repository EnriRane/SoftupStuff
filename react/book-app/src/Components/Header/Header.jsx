import { useState } from "react";
import "./Header.css";
import React from "react";
import softupLogo from "./softupLogo.png";
const Header = ({
  onhandleFavBooksAppearance,
  onHandleSearchBookByTitle,
  onHandleBookCart,
  onShowNewBook,
}) => {
  const [userSearchInput, setUserSearchInput] = useState("");
  const handleUserInput = (event) => {
    setUserSearchInput(event.target.value);
  };
  return (
    <header>
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
        <img className="logoHeader" src={softupLogo} alt="Softup Logo" />
        <h1>Softup Library</h1>
      </div>
      <div className="rightCont">
        <div className="favoritesAndBucket">
          <div className="addBook" onClick={onShowNewBook}>
            <i className="fa-solid fa-circle-plus"></i>
          </div>
          <div className="favorites" onClick={onhandleFavBooksAppearance}>
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className="bucket" onClick={onHandleBookCart}>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
