import React, { useState } from "react";
import Pizza from "./Pizza";

const Order = () => {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              name="pizza-type"
              id=""
              value={pizzaType}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              <option value="pepperoni">Pepparoni</option>
              <option value="hawaiian">hawaiian</option>
              <option value="big_meat">Big Meat</option>
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
                  onClick={(e) => setPizzaSize(e.target.value)}
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
                  onClick={(e) => setPizzaSize(e.target.value)}
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
                  onClick={(e) => setPizzaSize(e.target.value)}
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
          <Pizza
            name="Pepproni"
            description="Pepproni desc"
            image={`/public/pizzas/${pizzaType}.webp`}
          />
        </div>
      </form>
    </div>
  );
};

export default Order;
