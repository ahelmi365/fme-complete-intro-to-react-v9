const Pizza = (props) => {
  return (
    <div className="pizza" id={props.id}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <img src={props?.image || "https://picsum.photos/200"} alt={props.name} />
    </div>
  );
};

export default Pizza;
