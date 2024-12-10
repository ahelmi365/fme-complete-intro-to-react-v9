import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import { useEffect, useState } from "react";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const getPizzas = async () => {
    const res = await fetch("/api/pizzas");
    const data = await res.json();
    console.log({ data });
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

  return <div className="app-container">{renderedPizaas}</div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
