import crypto from 'node:crypto';
import { getStore } from '@netlify/blobs';
import * as Sentry from '@sentry/tanstackstart-react';
import { createMiddleware, createServerFn } from '@tanstack/react-start';
import { getRequest } from '@tanstack/react-start/server';
import { strings } from '~/utils/constants';

export const visitorsMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    const skip = process.env.CI || process.env.NODE_ENV === 'test';

    const response = await next();

    if (!skip) {
      void write(createFingerprint(request)).catch((e) => {
        Sentry.logger.error(strings.errors.writeVisitors, e);
      });
    }

    return response;
  },
);

export const getFingerprint = createServerFn().handler(async () => {
  const request = getRequest();
  return createFingerprint(request);
});

async function write(fingerprint: string) {
  const store = getStore({
    name: 'site-store',
    siteID: process.env.SITE_BLOB_ID,
    token: process.env.SITE_TOKEN,
  });

  await store.set(`visitors/${fingerprint}`, '1');
}

function createFingerprint(req: Request): string {
  const fields = [
    'user-agent',
    'accept-language',
    'accept-encoding',
    'accept',
    'sec-ch-ua', // Client hints
    'sec-ch-ua-platform',
    'dnt', // Do Not Track
  ];

  // @ts-expect-error
  const ip = req.ip || req.connection?.remoteAddress || '';
  const results: string[] = [ip];
  const headers = new Headers(req.headers);

  for (const field of fields) {
    results.push(headers.get(field) ?? '');
  }

  const fingerprint = results.filter(Boolean).join('|');

  return crypto.createHash('sha256').update(fingerprint).digest('hex');
}
