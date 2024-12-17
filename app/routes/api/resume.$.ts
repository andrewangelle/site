import { createAPIFileRoute } from '@tanstack/start/api';
import { type DocumentType, exportResume } from '~/utils/exportResume';

export const APIRoute = createAPIFileRoute('/api/resume/$')({
  GET: ({ params: { _splat } }) => {
    const docType = _splat as DocumentType;
    return exportResume(docType);
  },
});
