import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../models/IBook";
import { getBooks } from "../../services/bookService";
import { AppDispatch } from "../store/store";
type BookState = {
  booksData: IBook[];
};

const slice = createSlice({
  name: "books",
  initialState: {
    booksData: [],
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

export const { addAllBooks, deleteBook } = slice.actions;
export default slice.reducer;
