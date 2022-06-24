import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../models/IBook";
import { getBooks, postBook } from "../../services/bookService";
import { AppDispatch } from "../store/store";
type BookState = {
  booksData: IBook[];
  searchQuery: string;
};

const slice = createSlice({
  name: "books",
  initialState: {
    booksData: [],
    searchQuery: "",
  },
  reducers: {
    addAllBooks: (state: BookState, { payload }: PayloadAction<IBook[]>) => {
      state.booksData = [...payload];
    },
    deleteBook: (state: BookState, { payload }: PayloadAction<string>) => {
      state.booksData = state.booksData.filter(
        (book) => book.title !== payload
      );
    },
    addSearchQuery: (state: BookState, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
  },
});

export const fetchBooks = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getBooks();
      dispatch(addAllBooks(data));
    } catch (error) {}
  };
};

export const createNewBook = (book: IBook) => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await postBook(book);
      console.log(data);
    } catch (error) {}
  };
};

export const { addAllBooks, deleteBook, addSearchQuery } = slice.actions;
export default slice.reducer;
