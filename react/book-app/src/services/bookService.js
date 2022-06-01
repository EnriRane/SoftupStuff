import http from './httpService';
import config from '../config.json';

const getBooks = async () => {
  try {
    const response = await http.get(config.bookAPI + '/books.json');
    if (response.status !== 200) {
      throw new Error("You can't get the books");
    }
    return response.data;
  } catch (error) {
    return error;
  }
};

const postBook = async (book) => {
  return await http.post(config.bookAPI + '/books.json', book);
};
export { getBooks, postBook };
