import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import { useEffect, useState } from "react";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";

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

  // return <div className="app-container">{renderedPizaas}</div>;
  return (
    <StrictMode>
      <div className="app-container">
        <h1 className="logo">Padre Gino's - Order Now</h1>
        <Order />

        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
