import { configureStore } from "@reduxjs/toolkit";
import reducer from "../combinedReducers/combineReducers";

export const store = configureStore({
  reducer: reducer,
});
