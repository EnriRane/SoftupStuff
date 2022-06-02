import React from 'react';
import { useReducer } from 'react';
import { cartReducer } from '../reducer/cartReducer';
import { getCart } from '../services/cartService';
const CartContext = React.createContext();
CartContext.displayName = 'CartContext';

export const CartProvider = ({ children }) => {
  const [bookCart, dispatchBookCart] = useReducer(cartReducer, []);

  const getAllCartData = async () => {
    const cartData = await getCart();
    let cart = [];
    for (let key of Object.keys(cartData)) {
      cart.push({ ...cartData[key], _id: key });
    }

    dispatchBookCart({
      type: 'addAllItemsToCart',
      payload: cart
    });
  };
  return (
    <CartContext.Provider value={{ bookCart, dispatchBookCart, getAllCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
