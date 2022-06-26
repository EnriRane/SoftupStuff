import http from "./httpService";
import config from "../config/config.json";
import { getToken } from "./authService";

const getAuthors = async () => {
  const { data } = await http.get(`${config.apiUrl}/authors`, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

  return data;
};

export { getAuthors };
