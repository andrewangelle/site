import crypto from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createMiddleware } from '@tanstack/react-start';

export const visitorsFilePath = path.join(import.meta.dirname, './db.json');

export const visitorsMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    if (process.env.NODE_ENV === 'development') {
      await write(createFingerprint(request));
    }
    return next();
  },
);

async function write(fingerprint: string) {
  let visitorData: { visitors: string[] } = { visitors: [] };

  if (existsSync(visitorsFilePath)) {
    const dbFileBase = await readFile(visitorsFilePath, 'utf-8');
    visitorData = JSON.parse(dbFileBase) as { visitors: string[] };
  }

  const nextState = {
    visitors: Array.from(new Set([...visitorData.visitors, fingerprint])),
  };

  await writeFile(visitorsFilePath, JSON.stringify(nextState));
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
