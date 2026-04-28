import * as Sentry from '@sentry/tanstackstart-react';
import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { AppError } from '~/components/AppError';
import { NotFound } from '~/components/NotFound';
import { routeTree } from '~/routeTree.gen';

const sentryDsn =
  import.meta.env?.VITE_SENTRY_DSN ?? process.env.VITE_SENTRY_DSN;

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultErrorComponent: AppError,
    defaultNotFoundComponent: NotFound,
    scrollRestoration: false,
  });

  if (!router.isServer) {
    Sentry.init({
      dsn: sentryDsn,
      enabled: import.meta.env.PROD,
      sendDefaultPii: true,
      integrations: [
        Sentry.tanstackRouterBrowserTracingIntegration(router),
        Sentry.replayIntegration(),
        Sentry.linkedErrorsIntegration(),
      ],
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  }

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
