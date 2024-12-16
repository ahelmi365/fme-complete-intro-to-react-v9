import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";

import Pizza from "../Pizza";

afterEach(cleanup);
test("Pizza image has alt text", async () => {
  const name = "Pizza name";
  const src = "https://picsum.photos/200";

  const screen = render(<Pizza name={name} image={src} description={name} />);

  const img = screen.getByRole("img");

  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image id none is provided", async () => {
  const screen = render(<Pizza name="something" description="desc" />);
  const img = screen.getByRole("img");

  expect(img.src).not.toBe("");
});
