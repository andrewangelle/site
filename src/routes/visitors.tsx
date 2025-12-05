import { readFile } from 'node:fs/promises';
import { createFileRoute } from '@tanstack/react-router';
import { visitorsFilePath } from '~/services/visitors';

export const Route = createFileRoute('/visitors')({
  server: {
    handlers: {
      async GET() {
        let visitorsData: { visitors: string[] } = { visitors: [] };

        if (process.env.NODE_ENV === 'development') {
          const dbFile = await readFile(visitorsFilePath, 'utf-8');
          visitorsData = JSON.parse(dbFile) as { visitors: string[] };
        }

        const data = JSON.stringify({
          count: visitorsData.visitors.length ?? 0,
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
