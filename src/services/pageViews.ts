import * as Sentry from '@sentry/tanstackstart-react';
import { createMiddleware } from '@tanstack/react-start';

const skip = process.env.CI || process.env.NODE_ENV === 'test';

export const pageViewsMiddleware = createMiddleware({
  type: 'function',
}).client(async ({ next }) => {
  if (!skip) {
    Sentry.metrics.count('page_view_totals', 1);
  }

  return next();
});
