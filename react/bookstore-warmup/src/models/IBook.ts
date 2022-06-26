export interface IBook {
  _id?: string;
  key?: string;
  title: string;
  author: string;
  // publication?: [{ date: string | Date; _id?: string }] | string[] | string;
  publications: string[] | [{ date: string | Date; _id?: string }] | string;
  genre: string;
  pages: number;
  images?: {
    _id: string;
    name: string;
    url: string;
  }[];
}
