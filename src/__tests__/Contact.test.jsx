import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import createFetchMock from "vitest-fetch-mock";
import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import Contact from "../Contact";

const queryClinet = new QueryClient();

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

test("can submit contact form", async () => {
  fetchMocker.mockResponse(JSON.stringify({ status: "Ok" }));

  const screen = render(
    <QueryClientProvider client={queryClinet}>
      <Contact />
    </QueryClientProvider>
  );

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const messageInput = screen.getByPlaceholderText("Message");

  const testData = {
    name: "Ali",
    email: "ali@gmail.com",
    message: "testing message!",
  };

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  messageInput.value = testData.message;

  const submitBtn = screen.getByRole("button");

  submitBtn.click();

  const h3 = await screen.findByRole("heading", { level: 3 });

  expect(h3.innerText).toContain("Submitted");

  const requests = fetchMocker.requests();
  expect(requests.length).toBe(1);
  expect(requests[0].url).toBe("/api/contact");
  expect(fetchMocker).toBeCalledWith("/api/contact", {
    body: JSON.stringify(testData),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
});
