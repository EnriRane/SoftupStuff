export const getFinalId = (
  users: {
    html_url: string;
    avatar_url: string;
    login: string;
    id: number;
  }[]
) => {
  const { id } = users[users.length - 1];
  return id;
};
