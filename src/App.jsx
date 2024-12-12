import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import { StrictMode } from "react";

import PizzaOfTheDay from "./PizzaOfTheDay";
import { CartContext } from "./contexts";
import Header from "./Header";
import Pizza from "./Pizza";
import Order from "./Order";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const getPizzas = async () => {
    const res = await fetch("/api/pizzas");
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);
  const renderedPizaas = pizzas.map((piza) => (
    <Pizza
      id={piza.id}
      name={piza.name}
      description={piza.description}
      image={piza.image}
      key={piza.id}
    />
  ));

  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div className="app-container">
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
