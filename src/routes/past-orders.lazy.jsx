import { createLazyFileRoute } from "@tanstack/react-router";

import ErrorBoundry from "../ErrorBoundary";
import PastOrders from "../PastOrders";

export const Route = createLazyFileRoute("/past-orders")({
  component: ErrorBoundryWrappedPastOrders,
});

function ErrorBoundryWrappedPastOrders() {
  return (
    <ErrorBoundry>
      <PastOrders />
    </ErrorBoundry>
  );
}
