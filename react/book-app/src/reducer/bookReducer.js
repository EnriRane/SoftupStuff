const bookReducer = (books, { type, payload }) => {
  switch (type) {
    case "addAllBooks":
      return [...payload];
    case "changeBookLike":
      return books.map((book) => {
        if (book.title === payload.title) {
          return { ...book, liked: !book.liked };
        }
        return book;
      });
    case "filterBooks":
      if (payload === "foreign" || payload === "albanian") {
        return JSON.parse(localStorage.getItem("books")).filter(
          (b) => b.category === payload
        );
      }
      return [...JSON.parse(localStorage.getItem("books"))];
    case "searchByTitle":
      const book = books.find(
        (b) => b.title.toLowerCase() === payload.toLowerCase()
      );
      return [book];
    default:
      return [...books];
  }
};
export { bookReducer };
