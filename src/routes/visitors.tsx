import { createFileRoute } from '@tanstack/react-router';
import { readDev, readProd } from '~/services/visitors';

export const Route = createFileRoute('/visitors')({
  server: {
    handlers: {
      async GET() {
        const visitorsData =
          process.env.NODE_ENV === 'development'
            ? await readDev()
            : await readProd();

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
