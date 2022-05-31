import http from './httpService';
import config from '../config.json';

const postToCart = (book) => {
  return http.post(config.bookAPI + '/cart.json', book);
};

const updateCart = (book, id) => {
  return http.put(config.bookAPI + `/cart/${id}.json`, book);
};
const deleteFromCart = (id) => {
  console.log(config.bookAPI + `/cart/${id}.json/`);
  return http.delete(config.bookAPI + `/cart/${id}.json`);
};
const getCart = () => {
  return http.get(config.bookAPI + `/cart.json/`);
};

export { getCart, postToCart, updateCart, deleteFromCart };
