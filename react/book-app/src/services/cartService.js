import http from './httpService';
import config from '../config.json';

const getCart = async () => {
  try {
    const response = await http.get(config.bookAPI + `/cart.json`);
    if (response.status !== 200) {
      throw new Error("You can't get the cart items");
    }

    return response.data;
  } catch (error) {
    return error;
  }
};
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

export { getCart, postToCart, updateCart, deleteFromCart };
