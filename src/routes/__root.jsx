import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useState } from "react";

import PizzaOfTheDay from "../PizzaOfTheDay";
import { CartContext } from "../contexts";
import Header from "../Header";

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div className="app-container">
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
