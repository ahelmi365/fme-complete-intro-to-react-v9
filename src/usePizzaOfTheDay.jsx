import { useState, useEffect, useDebugValue } from "react";

const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setpPzzaOfTheDay] = useState(null);
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}` : "Loading...");

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const res = await fetch("/api/pizza-of-the-day");
      const data = await res.json();
      setpPzzaOfTheDay(data);
    }
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};

export default usePizzaOfTheDay;
