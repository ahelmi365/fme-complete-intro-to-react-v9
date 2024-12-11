import { useState, useEffect } from "react";
import Cart from "./Cart";
import Pizza from "./Pizza";
import useCurrencyINTL from "./useCurrencyINTL";

const currencyINTL = useCurrencyINTL();

const Order = () => {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [cart, setCart] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizza.id === pizzaType);
    price = currencyINTL.format(selectedPizza.sizes[pizzaSize]);
  }

  const getPizzaTypes = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    console.log({ pizzaJson });
    setPizzaTypes(pizzaJson);
    setLoading(false);
  };

  useEffect(() => {
    getPizzaTypes();
  }, []);
  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCart([
              ...cart,
              { pizza: selectedPizza, size: pizzaSize, price },
            ]);
          }}
        >
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select
                name="pizza-type"
                id=""
                value={pizzaType}
                onChange={(e) => setPizzaType(e.target.value)}
              >
                <option value="-1">Select Pizza Type</option>

                {pizzaTypes.map((pizzaType) => (
                  <option value={pizzaType.id} key={pizzaType.id}>
                    {pizzaType.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input
                    type="radio"
                    id="pizza-s"
                    name="pizza-size"
                    checked={pizzaSize === "S"}
                    value={"S"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="pizza-m"
                    name="pizza-size"
                    checked={pizzaSize === "M"}
                    value={"M"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="pizza-l"
                    name="pizza-size"
                    checked={pizzaSize === "L"}
                    value={"L"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <div>
              <button type="submit">Add to cart</button>
            </div>
          </div>
          <div>
            {loading && <span>Loading...</span>}
            {!loading && (
              <>
                <Pizza
                  name={selectedPizza.name}
                  description={selectedPizza?.description}
                  image={selectedPizza.image}
                />
                <p>{price}</p>
              </>
            )}
          </div>
        </form>
      </div>
      {loading ? <h2>LOADING...</h2> : <Cart cart={cart} />}
    </div>
  );
};

export default Order;
