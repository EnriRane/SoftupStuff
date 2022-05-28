import http from "./httpService";
import config from "../config.json";

const getBooks = async () => {
  return await http.get(config.bookAPI + "/books.json");
};

const postBook = async (book) => {
  return await http.post(config.bookAPI + "/books.json", book);
};
export { getBooks, postBook };
