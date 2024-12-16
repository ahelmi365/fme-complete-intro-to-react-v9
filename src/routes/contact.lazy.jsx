import { createLazyFileRoute } from "@tanstack/react-router";

import Contact from "../Contact";

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
});
