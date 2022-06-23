import http from "./httpService";
import config from "../config/config.json";
import { IBook } from "../models/IBook";

const fetchBooks = async () => {
  const { data } = await http.get(`${config.apiUrl}/books`);
  return data;
};

const postBook = async (book: IBook) => {
  const { data } = await http.post(`${config.apiUrl}/books`, book);
  return data;
};

const updateBook = async (book: IBook) => {
  const { data } = await http.put(`${config.apiUrl}/books`, book);
  return data;
};

export { fetchBooks, postBook, updateBook };
