import CartModal from "../Modal/CartModal/CartModal";
import "./Cart.css";
const Cart = ({
  onhandleBookCartAppearance,
  bookCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const calculateCartValue = () => {
    let totalPrice = 0;
    for (let book of bookCart) {
      totalPrice = totalPrice + book.sellQuantity * book.price;
    }
    return totalPrice;
  };
  return (
    <CartModal>
      <div className="cart">
        <h1>My book cart</h1>
        {bookCart.length < 1 ? (
          <h2>No books in shopping cart</h2>
        ) : (
          <div>
            <ul>
              {bookCart.map((book) => (
                <li key={book.title}>
                  {
                    <div className="cartBook">
                      <img src={book.image} alt="" />
                      <div className="author">
                        <h2>{book.title}</h2>
                        <h4>{book.author}</h4>
                      </div>
                      <div className="plusAndMinus">
                        <i
                          onClick={() => {
                            increaseQuantity(book);
                          }}
                          className="fa-solid fa-plus"
                        ></i>
                        <h2>{book.sellQuantity}</h2>
                        <i
                          onClick={() => {
                            decreaseQuantity(book);
                          }}
                          className="fa-solid fa-minus"
                        ></i>
                      </div>
                    </div>
                  }
                </li>
              ))}
            </ul>
          </div>
        )}
        <h2 className="price">Totali : {calculateCartValue()} leke</h2>
        <div className="buttons">
          <button onClick={onhandleBookCartAppearance}>Cancel</button>
          <button>Order</button>
        </div>
      </div>
    </CartModal>
  );
};

export default Cart;
