import { createRoot } from "react-dom/client";
import Piza from "./Piza";

const pizaas = [
  { id: 1, name: "Piza-1", desc: "Piza-1-description" },
  { id: 2, name: "Piza-2", desc: "Piza-2-description" },
  { id: 3, name: "Piza-3", desc: "Piza-3-description" },
  { id: 4, name: "Piza-4", desc: "Piza-4-description" },
  { id: 5, name: "Piza-5", desc: "Piza-5-description" },
];

const App = () => {
  const renderedPizaas = pizaas.map((piza) => (
    <Piza piza={piza} key={piza.id} />
  ));

  return (
    <div className="app-container">
      <h1 className="heading">Hello React!</h1>
      {renderedPizaas}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
