import http from "./httpService";
import config from "../config/config.json";

export async function login(email: string, password: string) {
  //get response and put the jwt to localStorage
  const { data: jwt } = await http.post(`${config.apiUrl}/auth/login`, {
    email,
    password,
  });
  localStorage.setItem("token", jwt);
}
export function logout() {
  localStorage.removeItem("token");
}

const auth = {
  login,
  logout,
};

export default auth;
