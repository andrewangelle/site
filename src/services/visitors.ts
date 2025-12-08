import crypto from 'node:crypto';
import { getStore } from '@netlify/blobs';
import { createMiddleware } from '@tanstack/react-start';

export const visitorsMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    const skip = process.env.CI || process.env.NODE_ENV === 'test';

    if (!skip) {
      await write(createFingerprint(request));
    }

    return next();
  },
);

async function write(fingerprint: string) {
  const store = getStore({
    name: 'site-store',
    siteID: process.env.SITE_BLOB_ID,
    token: process.env.SITE_TOKEN,
  });
  const visitors = await store.get('visitors', { type: 'json' });
  const nextState = Array.from(new Set([...visitors, fingerprint]));
  await store.setJSON('visitors', nextState);
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
