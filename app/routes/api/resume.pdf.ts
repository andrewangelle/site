import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createAPIFileRoute } from '@tanstack/react-start/api';

export const APIRoute = createAPIFileRoute('/api/resume/pdf')({
  GET: async () => {
    const pathToPdf = join(process.cwd(), './app/utils/resume.pdf');
    const file = await readFile(pathToPdf);
    return new Response(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="andrewangelle_resume.pdf"`,
      },
    });
  },
});
