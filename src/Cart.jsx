import React from "react";

const Cart = (props) => {
  console.log(props.cart);
  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Cart Items</p>
    </div>
  );
};

export default Cart;
