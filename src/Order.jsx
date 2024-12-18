import { useState, useEffect } from "react";
import { useContext } from "react";

import useCurrencyINTL from "./useCurrencyINTL";
import { CartContext } from "./contexts";
import Pizza from "./Pizza";
import Cart from "./Cart";

export const Order = () => {
  const currencyINTL = useCurrencyINTL();
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;

  if (!loading && pizzaType !== "-1") {
    selectedPizza = pizzaTypes.find((pizza) => pizza.id === pizzaType);
    price = currencyINTL.format(selectedPizza.sizes[pizzaSize]);
  }

  const getPizzaTypes = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  };

  const addToCart = (formData) => {
    console.log(formData.get("pizza-type"));
    console.log(formData.get("pizza-size"));

    if (selectedPizza !== "-1") {
      setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
    }
  };
  const checkOut = async () => {
    if (cart.length > 0) {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });
      const data = await res.json();
      setCart([]);

      console.log(data);
      setLoading(false);
    }
  };
  useEffect(() => {
    getPizzaTypes();
  }, []);
  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form action={addToCart}>
          <div>
            {/* Pizza Type */}
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
            {/* Pizza size */}
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
            {/* add to cart btn */}
            <div>
              <button type="submit" disabled={loading}>
                Add to cart
              </button>
            </div>
          </div>
          {/* Pizza Preview  */}
          <div>
            {loading && <span>Loading...</span>}
            {!loading && (
              <>
                <Pizza
                  name={selectedPizza?.name}
                  description={selectedPizza?.description}
                  image={selectedPizza?.image}
                />
                <p>{price}</p>
              </>
            )}
          </div>
        </form>
      </div>
      {loading ? <h2>LOADING...</h2> : <Cart cart={cart} checkOut={checkOut} />}
    </div>
  );
};
