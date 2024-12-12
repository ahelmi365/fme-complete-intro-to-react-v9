import { createLazyFileRoute } from "@tanstack/react-router";

import PastOrders from "../PastOrders";

export const Route = createLazyFileRoute("/past-orders")({
  component: PastOrders,
});
