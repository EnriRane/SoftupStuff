import { combineReducers } from "redux";
import bookReducer from "../slices/bookSlice";
export default combineReducers({
  books: bookReducer,
});
