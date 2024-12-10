const Pizaa = (props) => {
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
  { id: 1, name: "Pizaa-1", desc: "Pizaa-1-description" },
  { id: 2, name: "Pizaa-2", desc: "Pizaa-2-description" },
  { id: 3, name: "Pizaa-3", desc: "Pizaa-3-description" },
  { id: 4, name: "Pizaa-4", desc: "Pizaa-4-description" },
  { id: 5, name: "Pizaa-5", desc: "Pizaa-5-description" },
];

const App = () => {
  return React.createElement("div", { class: "app-conatiner" }, [
    React.createElement("h1", { clas: "heading" }, "Hello React!"),
    pizaas.map((pizaa) =>
      React.createElement(Pizaa, {
        id: pizaa.id,
        name: pizaa.name,
        desc: pizaa.desc,
      })
    ),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
