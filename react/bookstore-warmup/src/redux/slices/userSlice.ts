import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getUser,
  saveJwtToStorage,
  saveUserToStorage,
} from "../../services/authService";
import { login } from "../../services/userService";
import { AppDispatch } from "../store/store";
import { IUser } from "../../models/IUser";
import { NavigateFunction } from "react-router-dom";
import { fetchBooks } from "./bookSlice";

const slice = createSlice({
  name: "user",
  initialState: {
    userData: getUser(),
  },
  reducers: {
    addUser: (state, { payload }: PayloadAction<IUser>) => {
      state.userData = { ...payload };
      saveUserToStorage(payload);
    },
  },
});

export const loginUser = (
  user: { username: string; password: string },
  navigate: NavigateFunction
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await login(user.username, user.password);
      const userData: IUser = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        isAdmin: data.isAdmin,
      };
      dispatch(addUser(userData));
      saveJwtToStorage(data.token);
      dispatch(fetchBooks());
      navigate("/app/books");
    } catch (error) {}
  };
};

export const { addUser } = slice.actions;
export default slice.reducer;
