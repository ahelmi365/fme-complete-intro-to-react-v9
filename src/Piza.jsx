const Piza = (props) => {
  return (
    <div className="pizaa-container" id={props.piza.id}>
      <h2>{props.piza.name}</h2>
      <p>{props.piza.desc}</p>
    </div>
  );
};

export default Piza;
