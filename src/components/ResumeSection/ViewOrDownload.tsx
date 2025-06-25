import { PDFDownloadLink } from '@react-pdf/renderer';
import { Link } from '@tanstack/react-router';
import { BsDownload, BsFiletypePdf } from 'react-icons/bs';
import { ResumePDF } from '~/PDF/ResumePDF';
import { PDF_CONSTANTS } from '~/PDF/constants';
import type { ResumeActionLinkProps } from '~/components/ResumeSection/ResumeAction';
import { strings } from '~/utils/constants';

export function ViewOrDownload({ action }: ResumeActionLinkProps) {
  if (action === 'download') {
    return (
      <PDFDownloadLink
        document={<ResumePDF />}
        fileName={PDF_CONSTANTS.DOC_TITLE}
        aria-label={strings.aria.resume[action]}
      >
        <BsDownload role="presentation" className="doc-link" size={60} />
      </PDFDownloadLink>
    );
  }

  return (
    <Link to="/resume" aria-label={strings.aria.resume[action]}>
      <BsFiletypePdf role="presentation" className="doc-link" size={60} />
    </Link>
  );
}
