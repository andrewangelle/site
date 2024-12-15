import { createAPIFileRoute } from '@tanstack/start/api';
import { exportResume } from '~/utils/exportResume';

export const APIRoute = createAPIFileRoute('/api/resume/docx')({
  GET: async () => await exportResume('docx'),
});
