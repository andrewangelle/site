import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export type DocumentType = 'docx' | 'pdf' | 'odt';

const contentType: Record<DocumentType, string> = {
  pdf: 'application/pdf',
  // doc: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  docx: 'application/msword',
  odt: 'application/vnd.oasis.opendocument.text',
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
