const bookReducer = (books, { type, payload }) => {
  switch (type) {
    case "addAllBooks":
      return [...payload];
    case "changeBookLike":
      const newBooks = [...books];
      const index = newBooks.indexOf(payload);
      console.log("before", newBooks[index].liked);

      const myBook = newBooks[index];
      if (!newBooks[index].liked) {
        myBook.liked = true;
      }

      console.log("after", newBooks[index].liked);
      localStorage.setItem("books", JSON.stringify(newBooks));

      return newBooks;
    default:
      return [...books];
  }
};
export { bookReducer };
