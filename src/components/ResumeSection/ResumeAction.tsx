import { PDFDownloadLink } from '@react-pdf/renderer';
import { Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { BsDownload, BsFiletypePdf } from 'react-icons/bs';
import { AnimatedIcon } from '~/components/ResumeSection/AnimatedIcon';
import { useIsFocusWithin } from '~/hooks/useIsFocusWithin';
import { useIsHovering } from '~/hooks/useIsHovering';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { ResumePDF } from '~/PDF/ResumePDF';
import { enterExitAnimationProps, strings } from '~/utils/constants';

export type ResumeActionLinkProps = { action: 'view' | 'download' };

export function ResumeAction({ action }: ResumeActionLinkProps) {
  const containerRef = useRef(null);
  const isFocusWithin = useIsFocusWithin(containerRef);
  const isHovering = useIsHovering(containerRef);
  const isActive = isFocusWithin || isHovering;

  if (action === 'download') {
    return (
      <motion.div ref={containerRef} {...enterExitAnimationProps}>
        <PDFDownloadLink
          className="pdf-link"
          document={<ResumePDF />}
          fileName={PDF_CONSTANTS.DOC_TITLE}
          aria-label={strings.aria.resume.download}
        >
          <h3 style={{ color: isActive ? 'skyblue' : 'white' }}>
            {strings[action]}
          </h3>

          <AnimatedIcon isFocused={isFocusWithin} isHovering={isHovering}>
            <BsDownload role="presentation" className="doc-link" size={60} />
          </AnimatedIcon>
        </PDFDownloadLink>
      </motion.div>
    );
  }

  return (
    <motion.div ref={containerRef} {...enterExitAnimationProps}>
      <Link
        to="/resume"
        aria-label={strings.aria.resume.view}
        className="pdf-link"
      >
        <h3 style={{ color: isActive ? 'skyblue' : 'white' }}>
          {strings[action]}
        </h3>

        <AnimatedIcon isFocused={isFocusWithin} isHovering={isHovering}>
          <BsFiletypePdf role="presentation" className="doc-link" size={60} />
        </AnimatedIcon>
      </Link>
    </motion.div>
  );
}
