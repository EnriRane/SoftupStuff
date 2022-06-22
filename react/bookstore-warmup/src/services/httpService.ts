import axios from "axios";

export function setJwt(jwt: string) {
  axios.defaults.headers.common["x-auth-service"] = jwt;
}
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};

export default http;
