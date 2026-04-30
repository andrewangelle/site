import * as Sentry from '@sentry/tanstackstart-react';
import { createIsomorphicFn } from '@tanstack/react-start';

const skip = process.env.CI || process.env.NODE_ENV === 'test';

export const sendPageViewMetric = createIsomorphicFn().client(
  async ({ fingerprint }: { fingerprint: string }) => {
    if (!skip) {
      Sentry.metrics.count('page_view_totals', 1, {
        attributes: { fingerprint },
      });
    }

    return null;
  },
);
