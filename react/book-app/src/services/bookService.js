import http from "./httpService";
import config from "../config.json";

const getBooks = async () => {
  return await http.get(config.bookAPI);
};

const postBook = async (book) => {
  return await http.post(config.bookAPI, book);
};
export { getBooks, postBook };
