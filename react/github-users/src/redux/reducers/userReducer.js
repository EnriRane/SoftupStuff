const initialState = {
  usersList: [],
  lastId: 0,
};
const userReducer = (users = initialState, { type, payload }) => {
  switch (type) {
    case "addAllUsers":
      const newUsers = [...users.usersList, ...payload];
      const newState = { ...users, usersList: newUsers };
      return newState;
    case "changeLastId":
      return { ...users, lastId: payload };
    default:
      return { ...users };
  }
};

const getAllUsers = (state) => {
  return state.users.usersList;
};

export { userReducer, getAllUsers };
