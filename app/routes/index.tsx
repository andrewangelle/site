import { createFileRoute } from '@tanstack/react-router';
import { NotFound } from '~/components/NotFound';
import { Page } from '~/components/Page';

export const Route = createFileRoute('/')({
  component: Page,
  notFoundComponent: NotFound,
});
