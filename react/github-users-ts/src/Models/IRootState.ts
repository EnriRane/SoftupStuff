export interface IRootState {
  users: {
    usersList: {
      html_url: string;
      avatar_url: string;
      login: string;
      id: number;
    }[];
    lastId: number;
  };
}
