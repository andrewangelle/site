import "../styles/index.css";
import { createFileRoute } from '@tanstack/react-router'
import { Page } from "../components/Page";

export const Route = createFileRoute('/')({
  component: Page,
})