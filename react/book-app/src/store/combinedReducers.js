import { combineReducers } from 'redux';
import { bookReducer } from '../reducer/bookReducer';
import { cartReducer } from '../reducer/cartReducer';
export default combineReducers({
  cart: cartReducer,
  books: bookReducer
});
