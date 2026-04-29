import * as Sentry from '@sentry/tanstackstart-react';
import { createMiddleware } from '@tanstack/react-start';

export const pageViewsMiddleware = createMiddleware().server(
  async ({ next }) => {
    const skip = process.env.CI || process.env.NODE_ENV === 'test';

    if (!skip) {
      Sentry.metrics.count('page_view_totals', 1);
    }

    return next();
  },
);
