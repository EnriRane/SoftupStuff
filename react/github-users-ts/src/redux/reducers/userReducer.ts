import { IRootState } from "../../Models/IRootState";
import { ADD_ALL_USERS, CHANGE_LAST_ID } from "../actions/userActions";
interface UserReducer {
  type: string;
  payload: {
    html_url: string;
    avatar_url: string;
    login: string;
  }[];
}
const initialState = {
  usersList: [],
  lastId: 0,
};
const userReducer = (users = initialState, { type, payload }: UserReducer) => {
  switch (type) {
    case ADD_ALL_USERS:
      const newUsers = [...users.usersList, ...payload];
      const newState = { ...users, usersList: newUsers };
      return newState;
    case CHANGE_LAST_ID:
      return { ...users, lastId: payload };
    default:
      return { ...users };
  }
};

const getAllUsers = (state: IRootState) => {
  return state.users.usersList;
};

export { userReducer, getAllUsers };
