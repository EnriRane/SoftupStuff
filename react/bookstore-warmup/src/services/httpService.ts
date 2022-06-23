import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
      toast.error("An unexpected error occurred", { theme: "dark" });
      console.log(error.response?.status);
      return Promise.reject(error);
    } else {
      console.log(error.response?.status);
      toast.error("You made a bad request", { theme: "dark" });
      return Promise.reject(error);
    }
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
