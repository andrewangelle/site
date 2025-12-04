import { readFile } from 'node:fs/promises';
import { createFileRoute } from '@tanstack/react-router';
import { visitorsFilePath } from '~/services/visitors';

export const Route = createFileRoute('/visitors')({
  server: {
    handlers: {
      async GET() {
        const dbFileBase = await readFile(visitorsFilePath, 'utf-8');
        const dbFile = JSON.parse(dbFileBase) as { visitors: string[] };
        const data = JSON.stringify({
          count: dbFile.visitors.length ?? 0,
        });
        const options = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        return new Response(data, options);
      },
    },
  },
});
