import NewBookModal from "../../Modal/NewBookModal/NewBookModal";
import "./NewBook.css";
const NewBook = ({ onShowNewBook }) => {
  return (
    <NewBookModal>
      <div>
        <h1 className="newBook">Add new book </h1>
        <form className="newBookForm">
          <div className="row">
            <div className="label">
              <label htmlFor="">Title</label>
            </div>
            <div className="input">
              <input type="text" placeholder="Enter book title..." />
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label htmlFor="">Author</label>
            </div>
            <div className="input">
              <input type="text" placeholder="Enter book author..." />
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label htmlFor="">Price</label>
            </div>
            <div className="input">
              <input type="text" placeholder="Enter book price..." />
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label htmlFor="">Quantity</label>
            </div>
            <div className="input">
              <input type="text" placeholder="Enter book quantity..." />
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label htmlFor="">Category</label>
            </div>
            <div className="input">
              <select>
                <option value="SelectCategory" hidden>
                  Select category:
                </option>
                <option value="Foreign">Foreign</option>
                <option value="Albanian">Albanian</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label htmlFor="">Image</label>
            </div>
            <div className="input">
              <input type="text" placeholder="Enter book image URL.." />
            </div>
          </div>
          <button onClick={onShowNewBook}>Cancel</button>
          <button>Add book</button>
        </form>
      </div>
    </NewBookModal>
  );
};

export default NewBook;
