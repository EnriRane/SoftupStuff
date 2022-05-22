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
    case "filterBooks":
      if (payload === "foreign" || payload === "albanian") {
        const myBooks = JSON.parse(localStorage.getItem("books")).filter(
          (b) => b.category === payload
        );
        return myBooks;
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
