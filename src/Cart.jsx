import React from "react";

import useCurrencyINTL from "./useCurrencyINTL";

const Cart = (props) => {
  const currencyINTL = useCurrencyINTL();
  console.log(props.cart);
  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Cart Items</p>
    </div>
  );
};

export default Cart;
