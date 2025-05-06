import { createAPIFileRoute } from '@tanstack/react-start/api';

export const APIRoute = createAPIFileRoute('/api/resume/pdf')({
  GET: async ({ request }) => {
    try {
      const url = new URL(request.url);
      const response = await fetch(`${url.origin}/resume.pdf`);
      return new Response(response.body, {
        headers: getResponseHeaders(request),
      });
    } catch (e) {
      return new Response(
        JSON.stringify({
          status: 500,
          message: (e as Error).message,
        }),
      );
    }
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
