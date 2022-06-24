import http from "./httpService";
import config from "../config/config.json";
import { IBook } from "../models/IBook";
import { getToken } from "./authService";

const getBooks = async () => {
  const { data } = await http.get(`${config.apiUrl}/books`, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
  return data;
};

const postBook = async (book: IBook) => {
  const { data } = await http.post(`${config.apiUrl}/books`, book, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
  return data;
};

const updateBook = async (book: IBook) => {
  const { data } = await http.put(`${config.apiUrl}/books`, book);
  return data;
};

export { getBooks, postBook, updateBook };
