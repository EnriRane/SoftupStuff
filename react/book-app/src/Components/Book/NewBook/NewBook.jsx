import NewBookModal from "../../Modal/NewBookModal/NewBookModal";
import React from "react";
import Joi from "joi-browser";
import { useState } from "react";
import "./NewBook.css";
import { postBook } from "../../../services/bookService";

const NewBook = ({ onShowNewBook }) => {
  const [newBook, setNewBook] = useState({
    data: {
      title: "",
      author: "",
      quantity: "",
      price: "",
      image: "",
      category: "",
      liked: false,
    },
    errors: {},
  });
  const schema = {
    title: Joi.string()
      .min(2)
      .max(255)
      .required()
      .label("Title"),
    author: Joi.string()
      .min(2)
      .max(255)
      .required()
      .label("Author"),
    quantity: Joi.number().max(500000),
    price: Joi.number().max(500000),
    image: Joi.string()
      .min(10)
      .max(255)
      .required()
      .label("Image"),
    category: Joi.string(),
  };
  const validateProperty = ({ name, value }) => {
    const input = { [name]: value };
    const inputSchema = { [name]: schema[name] };
    const { error } = Joi.validate(input, inputSchema);
    return error ? error.details[0].message : null;
  };
  const validate = () => {
    const result = Joi.validate(newBook.data, schema, {
      abortEarly: false,
    });
    const errors = {};
    if (!result.error) {
      return null;
    } else {
      for (let item of result.error.details) {
        item.message = `${item.context.label} can't be empty`;
        errors[item.path] = item.message;
      }
    }
    return errors;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validate();
    setNewBook((prevState) => {
      return { ...prevState, errors: errors || {} };
    });
    try {
      const book = { ...newBook.data };
      const response = await postBook(book);
      console.log("response of post ", response);
      const data = { ...newBook.data };
      for (let key of Object.keys(data)) {
        data[key] = "";
      }
      setNewBook({ data: data, errors: {} });
      window.location = "/";
    } catch (error) {
      console.log("error--->", error);
      if (error.response && error.response.status === 400) {
        const errors = { ...newBook.errors };
        errors.username = error.response.data;
        setNewBook((prevState) => {
          return { ...prevState, errors };
        });
      }
    }
  };
  const handleChange = (event) => {
    const errors = { ...newBook.errors };
    const errorMessage = validateProperty(event.target);
    if (errorMessage) errors[event.target.name] = errorMessage;
    else delete errors[event.target.name];

    const data = { ...newBook.data };
    data[event.currentTarget.name] = event.currentTarget.value;

    setNewBook({ data, errors });
  };

  return (
    <NewBookModal>
      <div>
        <h1 className="newBook">Add new book </h1>
        <form onSubmit={handleSubmit} className="newBookForm">
          <div className="row">
            <div className="label">
              <label htmlFor="">Title</label>
            </div>
            <div className="input">
              <input
                name="title"
                value={newBook.data.title}
                type="text"
                placeholder="Enter book title..."
                onChange={handleChange}
              />
            </div>
            <p className="error">{newBook.errors.title}</p>
          </div>
          <div className="row">
            <div className="label">
              <label htmlFor="">Author</label>
            </div>
            <div className="input">
              <input
                type="text"
                name="author"
                value={newBook.data.author}
                placeholder="Enter book author..."
                onChange={handleChange}
              />
            </div>
            <p className="error">{newBook.errors.author}</p>
          </div>
          <div className="row">
            <div className="label">
              <label htmlFor="">Price</label>
            </div>
            <div className="input">
              <input
                type="number"
                name="price"
                value={newBook.data.price}
                placeholder="Enter book price..."
                min="0"
                onChange={handleChange}
              />
            </div>
            <p className="error">{newBook.errors.price}</p>
          </div>
          <div className="row">
            <div className="label">
              <label htmlFor="">Quantity</label>
            </div>
            <div className="input">
              <input
                type="number"
                name="quantity"
                value={newBook.data.quantity}
                placeholder="Enter book quantity..."
                min="0"
                onChange={handleChange}
              />
            </div>
            <p className="error">{newBook.errors.quantity}</p>
          </div>
          <div className="row">
            <div className="label">
              <label htmlFor="">Category</label>
            </div>
            <div className="input">
              <select
                name="category"
                onChange={handleChange}
                value={newBook.data.category}
              >
                <option value="SelectCategory" hidden>
                  Select category:
                </option>
                <option value="foreign">Foreign</option>
                <option value="albanian">Albanian</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label htmlFor="">Image</label>
            </div>
            <div className="input">
              <input
                type="text"
                name="image"
                value={newBook.data.image}
                placeholder="Enter book image URL.."
                onChange={handleChange}
              />
            </div>
            <p className="error">{newBook.errors.image} </p>
          </div>
          <button onClick={onShowNewBook}>Cancel</button>
          <button>Add book</button>
        </form>
      </div>
    </NewBookModal>
  );
};

export default NewBook;
