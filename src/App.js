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

const App = () => {
  return React.createElement("div", { class: "app-conatiner" }, [
    React.createElement("h1", { clas: "header" }, "Hello React!"),
    React.createElement(Pizaa, { id: "1", name:"Pizaa-1", desc:"Pizaa-1-desc" }),
    React.createElement(Pizaa, { id: "2", name:"Pizaa-2", desc:"Pizaa-2-desc" }),
    React.createElement(Pizaa, { id: "3", name:"Pizaa-3", desc:"Pizaa-3-desc" }),
    React.createElement(Pizaa, { id: "4", name:"Pizaa-4", desc:"Pizaa-4-desc" }),
    React.createElement(Pizaa, { id: "5", name:"Pizaa-5", desc:"Pizaa-5-desc" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
