import { PDFDownloadLink } from '@react-pdf/renderer';
import { Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { BsDownload, BsFiletypePdf } from 'react-icons/bs';
import type { ResumeActionLinkProps } from '~/components/ResumeSection/ResumeAction';
import { activeLinkConfig, strings } from '~/utils/constants';
import { ResumePDF } from '../../PDF/ResumePDF';
import { PDF_CONSTANTS } from '../../PDF/constants';

export function ViewOrDownload({ action }: ResumeActionLinkProps) {
  if (isMobile) {
    return (
      <div className="mobile-link">
        <button type="button" aria-label={strings.aria.resume[action]}>
          {action === 'download' ? (
            <PDFDownloadLink
              document={<ResumePDF />}
              fileName={PDF_CONSTANTS.DOC_TITLE}
            >
              <BsDownload role="presentation" className="doc-link" size={60} />
            </PDFDownloadLink>
          ) : (
            <Link to="/resume">
              <BsFiletypePdf
                role="presentation"
                className="doc-link"
                size={60}
              />
            </Link>
          )}
        </button>
      </div>
    );
  }

  return (
    <motion.button
      aria-label={strings.aria.resume[action]}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
    >
      {action === 'download' ? (
        <PDFDownloadLink
          document={<ResumePDF />}
          fileName={PDF_CONSTANTS.DOC_TITLE}
        >
          <BsDownload role="presentation" className="doc-link" size={60} />
        </PDFDownloadLink>
      ) : (
        <Link to="/resume">
          <BsFiletypePdf role="presentation" className="doc-link" size={60} />
        </Link>
      )}
    </motion.button>
  );
}
