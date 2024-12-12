import useCurrencyINTL from "./useCurrencyINTL";

const Cart = ({ cart, checkOut }) => {
  const currencyINTL = useCurrencyINTL();
  let total = 0;
  cart.forEach((item) => {
    total += item.pizza.sizes[item.size];
  });

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span>-
            <span className="type">{item.pizza.name}</span>-
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>

      <p className="total">Total: {currencyINTL.format(total)}</p>
      <button onClick={checkOut}>Checkout </button>
    </div>
  );
};

export default Cart;
