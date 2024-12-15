import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export type DocumentType = 'docx' | 'pdf';

const contentType: Record<DocumentType, string> = {
  pdf: 'application/pdf',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

export async function exportResume(docType: DocumentType) {
  const pathToPdf = join(process.cwd(), `./app/utils/resume.${docType}`);
  const file = await readFile(pathToPdf);
  return new Response(file, {
    headers: {
      'Content-Type': contentType[docType],
      'Content-Disposition': `attachment; filename="andrewangelle_resume.${docType}"`,
    },
  });
}
