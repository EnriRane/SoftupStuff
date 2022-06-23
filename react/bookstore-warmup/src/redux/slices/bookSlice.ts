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

export const { addAllBooks } = slice.actions;
export default slice.reducer;
