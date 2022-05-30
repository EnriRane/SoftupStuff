const cartReducer = (cart, { type, payload }) => {
  switch (type) {
    case 'addAllItemsToCart':
      return [...payload];
    case 'addToCart':
      if (cart.find((b) => b.title === payload.title)) {
        return [...cart];
      }
      const newBook = { ...payload, sellQuantity: 1 };

      return [...cart, newBook];
    case 'increaseQuantityOfBook':
      return cart.map((book) => {
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
    case 'decreaseQuantityOfBook':
      return cart.map((book, index) => {
        if (book.title === payload.title) {
          let sellQuantity = book.sellQuantity;

          if (book.sellQuantity === 1) {
            cart.splice(index, 1);
          }
          sellQuantity < 1 ? (sellQuantity = 0) : (sellQuantity = sellQuantity - 1);

          return { ...book, sellQuantity };
        }
        return book;
      });
    default:
      return [...cart];
  }
};

export { cartReducer };
