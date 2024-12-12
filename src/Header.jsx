import React, { useContext } from "react";

import { CartContext } from "./contexts";

const Header = () => {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      <h1 className="logo">Padre Gino;s Pizza</h1>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
};

export default Header;
