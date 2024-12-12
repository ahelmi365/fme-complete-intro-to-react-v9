import { createLazyFileRoute } from "@tanstack/react-router";

import About from "../About";

export const Route = createLazyFileRoute("/about")({
  component: About,
});
