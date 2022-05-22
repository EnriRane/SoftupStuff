const bookReducer = (books, { type, payload }) => {
  switch (type) {
    case "addAllBooks":
      return [...payload];
    case "changeBookLike":
      const newBooks = [...books];
      const index = newBooks.indexOf(payload);
      console.log(JSON.parse(localStorage.getItem("books")));
      if (payload.liked === true) {
        newBooks[index].liked = false;
      } else {
        newBooks[index].liked = true;
      }
      localStorage.setItem("books", JSON.stringify(newBooks));
      console.log(JSON.parse(localStorage.getItem("books")));
      return [...newBooks];
    default:
      return [...books];
  }
};
export { bookReducer };
