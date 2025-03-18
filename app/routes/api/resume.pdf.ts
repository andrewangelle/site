import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createAPIFileRoute } from '@tanstack/react-start/api';

export const APIRoute = createAPIFileRoute('/api/resume/pdf')({
  GET: async ({ request }) => {
    const pathToPdf = join(process.cwd(), './app/utils/resume.pdf');
    const file = await readFile(pathToPdf);
    return new Response(file, {
      headers: getResponseHeaders(request),
    });
  },
});

function getResponseHeaders(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  const headers = new Headers({
    'Content-Type': 'application/pdf',
  });

  if (action === 'download') {
    headers.set(
      'Content-Disposition',
      `attachment; filename="andrewangelle_resume.pdf"`,
    );
  }

  return headers;
}
