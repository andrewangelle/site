import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { NotFound } from '~/components/NotFound';
import { routeTree } from '~/routeTree.gen';

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultNotFoundComponent: NotFound,
    scrollRestoration: false,
  });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
