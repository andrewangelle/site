import { createFileRoute } from '@tanstack/react-router'
import { Page } from "~/components/Page";
import { NotFound } from "~/components/NotFound";

export const Route = createFileRoute('/')({
  component: Page,
  notFoundComponent: NotFound
})