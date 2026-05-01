import { getStore } from '@netlify/blobs';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/visitors')({
  server: {
    handlers: {
      async GET() {
        const store = getStore({
          name: 'site-store',
          siteID: process.env.SITE_BLOB_ID,
          token: process.env.SITE_TOKEN,
        });

        const visitors = await store.list({
          prefix: 'visitors/',
        });

        const data = JSON.stringify({
          count: visitors.blobs.length ?? 0,
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
