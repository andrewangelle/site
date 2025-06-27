import { PDFDownloadLink } from '@react-pdf/renderer';
import { Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { BsDownload, BsFiletypePdf } from 'react-icons/bs';
import { ResumePDF } from '~/PDF/ResumePDF';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { ViewOrDownload } from '~/components/ResumeSection/ViewOrDownload';
import { enterExitAnimationProps } from '~/utils/constants';
import { strings } from '~/utils/constants';

export type ResumeActionLinkProps = { action: 'view' | 'download' };

export function ResumeAction({ action }: ResumeActionLinkProps) {
  if (action === 'download') {
    return <DownloadLink />;
  }
  return <ViewLink />;
}

export function DownloadLink() {
  return (
    <motion.div {...enterExitAnimationProps}>
      <PDFDownloadLink
        className="pdf-link"
        document={<ResumePDF />}
        fileName={PDF_CONSTANTS.DOC_TITLE}
        aria-label={strings.aria.resume.download}
      >
        <h3>{strings.download}</h3>
        <BsDownload role="presentation" className="doc-link" size={60} />
      </PDFDownloadLink>
    </motion.div>
  );
}

export function ViewLink() {
  return (
    <motion.div {...enterExitAnimationProps}>
      <Link
        to="/resume"
        aria-label={strings.aria.resume.view}
        className="pdf-link"
      >
        <h3>{strings.view}</h3>
        <BsFiletypePdf role="presentation" className="doc-link" size={60} />
      </Link>
    </motion.div>
  );
}
