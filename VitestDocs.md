## Using fetchMocker

- This test file involves testing a Contact component that uses `@tanstack/react-query` for handling server interactions and fetch for making API calls. Below, I'll explain the roles of `fetchMocker` and `QueryClientProvider` in this test:

1. fetchMocker
   fetchMocker is an instance created using the vitest-fetch-mock library, which allows you to mock the fetch API during tests.

### Purpose:

- It intercepts calls to fetch made during the test and provides mock responses without actually making HTTP requests.
- This is useful for testing components or hooks that rely on server responses without needing a real server.

### Key Parts in the Code:

1. fetchMocker.enableMocks()

   - Enables the mock fetch API globally so that all fetch calls in the test are intercepted and handled by the mocker.

2. fetchMocker.mockResponse()

   - Specifies the response that the mocked fetch API should return.

   - In this test, the mock response simulates a successful API call returning { status: "Ok" }.

   ```js
   fetchMocker.mockResponse(JSON.stringify({ status: "Ok" }));
   ```

3. fetchMocker.requests()

   - Tracks all requests made to fetch during the test.
   - You can verify the request details (e.g., URL, method, headers, and body) and ensure the correct data was sent.

   ```js
   const requests = fetchMocker.requests();
   expect(requests.length).toBe(1);
   expect(requests[0].url).toBe("/api/contact");
   ```

4. fetchMocker.toBeCalledWith()

   - Asserts that the mocked fetch was called with the expected arguments (URL, method, body, headers, etc.).

   ```js
   expect(fetchMocker).toBeCalledWith("/api/contact", {
     body: JSON.stringify(testData),
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
   });
   ```

### Summary of fetchMocker:

- Allows the test to simulate and verify API interactions without involving a real backend.
- Ensures that the Contact component sends the correct data and handles the response as expected.

## QueryClientProvider

`QueryClientProvider` is a context provider from` @tanstack/react-query`. It enables the `Contact` component (or any child components) to use the `useQuery` and `useMutation` hooks for managing server-side state.

### Purpose:

- Provides a QueryClient instance to the React Query context.
- This allows the Contact component to access React Query's features (e.g., caching, invalidation, and mutation handling) during the test.

### Key Parts in the Code:

1. const queryClient = new QueryClient()
   - Creates a new instance of QueryClient, which is required to use React Query hooks in the component.
2. Wrapping Contact in QueryClientProvider:

   - The Contact component likely uses React Query hooks (e.g., useMutation) to handle API interactions.
   - By wrapping it in QueryClientProvider, the test ensures the component has access to a QueryClient instance during rendering.

   ```js
   const screen = render(
     <QueryClientProvider client={queryClient}>
       <Contact />
     </QueryClientProvider>
   );
   ```

### Without QueryClientProvider:

- React Query hooks would throw an error because they require a QueryClient instance to function

### Summary of QueryClientProvider:

- Makes React Query's features available to the Contact component in the test.
- Ensures the component behaves as it would in a real application environment.

## What is `vi` in `const fetchMocker = createFetchMock(vi);`?

- The vi in const fetchMocker = createFetchMock(vi); refers to the mocking and spying utility provided by Vitest, the testing framework you're using in this file.

### What is `vi`?

- `vi` is Vitest's global object for creating mocks, spies, and other testing utilities.
- It functions similarly to `jest` in Jest-based test suites.
- In this specific case, `vi` is passed into `createFetchMock` so that it can integrate Vitest's mocking and spying capabilities with the `vitest-fetch-mock` library.

### Role of `vi` in `createFetchMock`:

- `createFetchMock` is a function from the `vitest-fetch-mock` library that sets up a mock for the `fetch` API.
- It requires a mocking utility (like `vi`) to spy on or mock calls to fetch.
- By passing `vi` into `createFetchMock`, you enable Vitest's spying and mocking mechanisms to be used for any mocked fetch calls.

This allows you to:

- Spy on `fetch` calls: Check how many times it was called, with what arguments, etc.
- Mock `fetch` responses: Provide fake data that simulates real API responses.
- Track all `fetch` calls: Access information about all requests made during the test.
