import crypto from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { getStore } from '@netlify/blobs';
import { createMiddleware } from '@tanstack/react-start';

export const visitorsMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    const fingerprint = createFingerprint(request);

    if (process.env.NODE_ENV === 'development') {
      await writeDev(fingerprint);
    } else {
      await writeProd(fingerprint);
    }

    return next();
  },
);

async function writeProd(fingerprint: string) {
  const store = getStore('site-store');
  const visitorStore = await store.get('visitors', { type: 'json' });
  const visitorData = JSON.parse(visitorStore) as string[];
  const nextState = Array.from(new Set([...visitorData, fingerprint]));
  await store.setJSON('visitors', nextState);
}

async function writeDev(fingerprint: string) {
  const visitorsFilePath = path.join(import.meta.dirname, './db.json');

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

export async function readDev() {
  const visitorsFilePath = path.join(import.meta.dirname, './db.json');
  const dbFile = await readFile(visitorsFilePath, 'utf-8');
  return JSON.parse(dbFile) as { visitors: string[] };
}

export async function readProd() {
  const store = getStore('site-store');
  const visitorStore = await store.get('visitors', { type: 'json' });
  const visitorData = JSON.parse(visitorStore) as string[];
  return {
    visitors: visitorData,
  };
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
