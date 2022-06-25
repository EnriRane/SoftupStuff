export interface IBook {
  key?: string;
  title: string;
  author: string;
  publication?: [{ date: string; _id: string }] | string[] | string;
  publications: string[];
  genre: string;
  photos?: {};
  pages: number;
}
