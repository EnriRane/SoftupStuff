const initialState = {
  usersList: [],
  lastId: 0,
};
const userReducer = (users = initialState, { type, payload }) => {
  switch (type) {
    case "addAllUsers":
      if (users.usersList.some((user) => user.id === payload[1].id)) {
        const newUsers = [...payload];
        return { ...users, usersList: newUsers };
      }
      const newUsers = [...users.usersList, ...payload];
      return { ...users, usersList: newUsers };
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
