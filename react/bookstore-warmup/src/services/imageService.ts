import http from "./httpService";
import config from "../config/config.json";
import { getToken } from "./authService";
import { IBook } from "../models/IBook";

const postImage = async (book: IBook, image: any) => {
  const { data } = await http.post(
    `${config.apiUrl}/books/${book._id}/images/bulk`,
    {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    }
  );

  return data;
};

const deleteImage = async (book: IBook, imageId: string) => {
  const { data } = await http.get(
    `${config.apiUrl}/books/${book._id}/${imageId}`,
    {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    }
  );

  return data;
};
export { postImage, deleteImage };
