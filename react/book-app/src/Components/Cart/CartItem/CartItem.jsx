import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCart, deleteFromCart } from '../../../services/cartService';

const CartItem = ({ book }) => {
  const dispatch = useDispatch();
  const handleIncreaseQuantity = async (book) => {
    try {
      let sellQuantity = book.sellQuantity;
      if (sellQuantity === book.quantity || sellQuantity > book.quantity) {
        sellQuantity = book.quantity;
      } else {
        sellQuantity = sellQuantity + 1;
      }
      const updatedBook = { ...book, sellQuantity };
      await updateCart(updatedBook, book._id);
      dispatch({ type: 'increaseQuantityOfBook', payload: book });
    } catch (error) {
      alert('Quantity was not increased');
    }
  };

  const handleDecreaseQuantity = async (book) => {
    try {
      let sellQuantity = book.sellQuantity;
      if (sellQuantity === 1) {
        await deleteFromCart(book._id);
      } else {
        sellQuantity < 1 ? (sellQuantity = 0) : (sellQuantity = sellQuantity - 1);
        const updatedBook = { ...book, sellQuantity };
        await updateCart(updatedBook, updatedBook._id);
      }
      dispatch({ type: 'decreaseQuantityOfBook', payload: book });
    } catch (error) {
      alert('Quantity was not decreased');
    }
  };
  return (
    <div className="cartBook">
      <img src={book.image} alt="" />
      <div className="author">
        <h3>{book.title}</h3>
        <h5>{book.author}</h5>
      </div>
      <div className="totalPricePerBook">
        <h2>{book.price} </h2>
        <h2>x</h2>
        <div className="plusAndMinus">
          <i
            onClick={() => {
              handleIncreaseQuantity(book);
            }}
            className="fa-solid fa-angle-up"></i>

          <h2>{book.sellQuantity}</h2>
          <i
            onClick={() => {
              handleDecreaseQuantity(book);
            }}
            className="fa-solid fa-angle-down"></i>
        </div>
        <h2>=</h2>
        <h2>{book.price * book.sellQuantity}</h2>
      </div>
    </div>
  );
};

export default CartItem;
