import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createAPIFileRoute } from '@tanstack/start/api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const APIRoute = createAPIFileRoute('/api/resume')({
  GET: async () => {
    const pathToPdf = path.join(__dirname, '../../utils/resume.pdf');
    const file = await readFile(pathToPdf);
    return new Response(file, {
      headers: {
        'Content-Type': 'application/pdf',
      },
    });
  },
});
