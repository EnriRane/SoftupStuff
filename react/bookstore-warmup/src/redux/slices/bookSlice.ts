import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../models/IBook";
type BookState = {
  books: IBook[];
};

const slice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    getAllBooks: (state: BookState, { payload }: PayloadAction<IBook[]>) => {
      state.books = [...payload];
    },
  },
});

export const { getAllBooks } = slice.actions;
export default slice.reducer;
