export const getFinalId = (users) => {
  const { id } = users[users.length - 1];
  return id;
};
