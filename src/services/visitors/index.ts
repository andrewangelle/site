import crypto from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createMiddleware } from '@tanstack/react-start';

export const visitorsFilePath = path.join(import.meta.dirname, './db.json');

export const visitorsMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    await write(createDetailedFingerprint(request));
    return next();
  },
);

async function write(fingerprint: string) {
  let dbFile: { visitors: string[] } = { visitors: [] };

  if (existsSync(visitorsFilePath)) {
    const dbFileBase = await readFile(visitorsFilePath, 'utf-8');
    dbFile = JSON.parse(dbFileBase) as { visitors: string[] };
  }

  const nextState = {
    visitors: Array.from(new Set([...dbFile.visitors, fingerprint])),
  };

  await writeFile(visitorsFilePath, JSON.stringify(nextState));
}

function createDetailedFingerprint(req: Request): string {
  const fingerprint = [
    req.headers['user-agent'] || '',
    req.headers['accept-language'] || '',
    req.headers['accept-encoding'] || '',
    // biome-ignore lint/complexity/useLiteralKeys: <>
    req.headers['accept'] || '',
    // @ts-expect-error
    req.ip || req.connection?.remoteAddress || '',
    req.headers['sec-ch-ua'] || '', // Client hints
    req.headers['sec-ch-ua-platform'] || '',
    // biome-ignore lint/complexity/useLiteralKeys: <>
    req.headers['dnt'] || '', // Do Not Track
  ]
    .filter((c) => c !== '')
    .join('|');

  return crypto.createHash('sha256').update(fingerprint).digest('hex');
}
