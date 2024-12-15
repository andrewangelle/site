import { createAPIFileRoute } from '@tanstack/start/api';
import { exportResume } from '~/utils/exportResume';

export const APIRoute = createAPIFileRoute('/api/resume/pdf')({
  GET: async () => await exportResume('pdf'),
});
