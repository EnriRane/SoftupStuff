import http from "./httpService";
import config from "../config.json";

const postToCart = (book) => {
  return http.post(config.bookAPI + "/cart.json", book);
};

const updateCart = (book) => {
  return http.put(config.bookAPI + "/cart.json", book);
};
export { postToCart, updateCart };
