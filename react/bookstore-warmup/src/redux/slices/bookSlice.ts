import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../models/IBook";
import { deleteABook, getBooks, postBook } from "../../services/bookService";
import { AppDispatch } from "../store/store";
type BookState = {
  booksData: IBook[];
  searchQuery: string;
  editableBook?: IBook | {};
};

const slice = createSlice({
  name: "books",
  initialState: {
    booksData: [],
    searchQuery: "",
    editableBook: {} as IBook,
  },
  reducers: {
    addAllBooks: (state: BookState, { payload }: PayloadAction<IBook[]>) => {
      state.booksData = [...payload];
    },
    deleteMyBook: (state: BookState, { payload }: PayloadAction<string>) => {
      state.booksData = state.booksData.filter(
        (book) => book.title !== payload
      );
    },
    addSearchQuery: (state: BookState, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    setEditableBook: (state: BookState, { payload }: PayloadAction<IBook>) => {
      state.editableBook = payload;
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
      await postBook(book);
    } catch (error) {}
  };
};

interface IDeleteBook extends IBook {
  _id: string;
}

export const deleteBook = (book: IDeleteBook) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(deleteMyBook(book.title));
      await deleteABook(book._id);
    } catch (error) {
      dispatch(createNewBook(book));
    }
  };
};
export const { addAllBooks, addSearchQuery, deleteMyBook, setEditableBook } =
  slice.actions;
export default slice.reducer;
