import CartModal from '../Modal/CartModal/CartModal';
import CartItem from './CartItem/CartItem';
import React from 'react';
import './Cart.css';
const Cart = ({ onhandleBookCartAppearance, bookCart, increaseQuantity, decreaseQuantity }) => {
  const calculateCartValue = () => {
    let totalPrice = 0;
    for (let book of bookCart) {
      totalPrice = totalPrice + book.sellQuantity * book.price;
    }
    return totalPrice;
  };

  return (
    <CartModal>
      <div className="cart">
        <h1>My book cart</h1>
        {bookCart.length < 1 ? (
          <h2>No books in shopping cart</h2>
        ) : (
          <div>
            <ul>
              {bookCart.map((book) => (
                <li key={book._id}>
                  <CartItem
                    book={book}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        <h2 className="cartPrice">Totali : {calculateCartValue()} leke</h2>
        <div className="buttons">
          <button onClick={onhandleBookCartAppearance}>Cancel</button>
          <button>Order</button>
        </div>
      </div>
    </CartModal>
  );
};

export default Cart;
