import React from "react";
import { createRoot } from "react-dom/client";

const Piza = (props) => {
  return React.createElement(
    "div",
    { class: "pizaa-container", id: props.id },
    [
      React.createElement("h2", {}, props.name),
      React.createElement("p", {}, props.desc),
    ]
  );
};

const pizaas = [
  { id: 1, name: "Piza-1", desc: "Piza-1-description" },
  { id: 2, name: "Piza-2", desc: "Piza-2-description" },
  { id: 3, name: "Piza-3", desc: "Piza-3-description" },
  { id: 4, name: "Piza-4", desc: "Piza-4-description" },
  { id: 5, name: "Piza-5", desc: "Piza-5-description" },
];

const App = () => {
  return React.createElement("div", { class: "app-conatiner" }, [
    React.createElement("h1", { clas: "heading" }, "Hello React!"),
    pizaas.map((pizaa) =>
      React.createElement(Piza, {
        key: pizaa.id,
        id: pizaa.id,
        name: pizaa.name,
        desc: pizaa.desc,
      })
    ),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
