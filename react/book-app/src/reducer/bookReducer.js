import {
  ADD_ALL_BOOKS,
  CHANGE_BOOK_LIKE,
  FILTER_BOOKS,
  SEARCH_BY_TITLE
} from '../actions/bookActions';
const bookReducer = (books = [], { type, payload }) => {
  switch (type) {
    case ADD_ALL_BOOKS:
      return [...payload];
    case CHANGE_BOOK_LIKE:
      return books.map((book) => {
        if (book.title === payload.title) {
          return { ...book, liked: !book.liked };
        }
        return book;
      });
    case FILTER_BOOKS:
      if (payload === 'foreign' || payload === 'albanian') {
        return JSON.parse(localStorage.getItem('books')).filter((b) => b.category === payload);
      }
      return [...JSON.parse(localStorage.getItem('books'))];
    case SEARCH_BY_TITLE:
      const book = books.find((b) => b.title.toLowerCase() === payload.toLowerCase());
      return [book];
    default:
      return [...books];
  }
};
export { bookReducer };
