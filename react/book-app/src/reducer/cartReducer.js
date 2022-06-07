import {
  ADD_ALL_ITEMS_TO_CART,
  INCREASE_QUANTITY_OF_BOOK,
  DECREASE_QUANTITY_OF_BOOK
} from '../actions/cartActions';
const cartReducer = (cart = [], { type, payload }) => {
  switch (type) {
    case ADD_ALL_ITEMS_TO_CART:
      return [...payload];
    case 'addToCart':
      if (cart.find((b) => b.title === payload.title)) {
        return [...cart];
      }
      const newBook = { ...payload, sellQuantity: 1 };

      return [...cart, newBook];
    case INCREASE_QUANTITY_OF_BOOK:
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
    case DECREASE_QUANTITY_OF_BOOK:
      const newCart = cart.map((book, index) => {
        if (book.title === payload.title) {
          let sellQuantity = book.sellQuantity;

          sellQuantity < 1 ? (sellQuantity = 0) : (sellQuantity = sellQuantity - 1);
          return { ...book, sellQuantity };
        }
        return book;
      });

      return newCart.filter((carItem) => carItem.sellQuantity > 0);
    default:
      return [...cart];
  }
};

export { cartReducer };
