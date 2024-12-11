import React from "react";

const Header = () => {
  return (
    <nav>
      <h1 className="logo">Padre Gino;s Pizza</h1>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">5</span>
      </div>
    </nav>
  );
};

export default Header;
