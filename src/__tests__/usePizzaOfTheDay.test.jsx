import { cleanup, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, expect, test, vi } from "vitest";
import createfetchMock from "vitest-fetch-mock";

import usePizzaOfTheDay from "../usePizzaOfTheDay";

const fetchMocker = createfetchMock(vi);
fetchMocker.enableMocks();
const testPizza = {
  id: "ital_cpcllo",
  name: "The Italian Capocollo Pizza",
  category: "Classic",
  description: "Capocollo, Red Peppers, Tomatoes, Goat Cheese, Garlic, Oregano",
  image: "/public/pizzas/ital_cpcllo.webp",
  sizes: {
    S: 12,
    M: 16,
    L: 20.5,
  },
};

beforeEach(cleanup);
test("gives null when first called", async () => {
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBeNull();
});

test("to call the api and get Pizza of the day", async () => {
  fetchMocker.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  await waitFor(
    () => {
      expect(result.current).toEqual(testPizza);
    },
    { timeout: 4000 }
  );
  console.log("result.current is: ", result.current);
  expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
});
