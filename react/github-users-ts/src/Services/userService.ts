import http from "./httpService";
import config from "../config/config.json";

const getUsers = async (lastId: number) => {
  try {
    const response = await http.get(
      `${config.apiUrl}?per_page=10&since=${lastId}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
const getUser = async (userId: string) => {
  const response = await http.get(`${config.apiUrl}/${userId}`);
  return response.data;
};

export { getUsers, getUser };
