import http from './httpService';
import config from '../config.json';

const postToCart = (book) => {
  return http.post(config.bookAPI + '/cart.json', book);
};

const updateCart = (book, id) => {
  return http.put(config.bookAPI + `/cart.json/${id}`, book);
};
const deleteFromCart = (id) => {
  return http.put(config.bookAPI + `/cart.json/${id}`);
};
export { postToCart, updateCart, deleteFromCart };
