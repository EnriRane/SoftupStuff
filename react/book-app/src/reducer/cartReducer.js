const cartReducer = (cart, { type, payload }) => {
  switch (type) {
    case "addToCart":
      console.log(cart);
      console.log(payload);
      if (cart.find((b) => b.title === payload.title)) {
        return [...cart];
      }
      const newBook = { ...payload, sellQuantity: 1 };
      return [...cart, newBook];
    case "increaseQuantityOfBook":
      return cart.map((book) => {
        console.log(payload);
        if (book.title === payload.title) {
          let sellQuantity = book.sellQuantity;
          if (sellQuantity === book.quantity || sellQuantity > book.quantity) {
            sellQuantity = book.quantity;
          } else {
            sellQuantity = sellQuantity + 1;
          }
          return { ...book, sellQuantity };
        }
        return book;
      });
    case "decreaseQuantityOfBook":
      return cart.map((book) => {
        if (book.title === payload.title) {
          let sellQuantity = book.sellQuantity;
          sellQuantity < 1
            ? (sellQuantity = 0)
            : (sellQuantity = sellQuantity - 1);

          return { ...book, sellQuantity };
        }
        return book;
      });
    default:
      return [...cart];
  }
};

export { cartReducer };