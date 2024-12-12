import { createLazyFileRoute } from "@tanstack/react-router";

import { Order } from "../Order";

export const Route = createLazyFileRoute("/order")({
  component: Order,
});
