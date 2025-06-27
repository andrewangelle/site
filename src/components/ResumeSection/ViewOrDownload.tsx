import { PDFDownloadLink } from '@react-pdf/renderer';
import { Link } from '@tanstack/react-router';
import { motion, useAnimate } from 'motion/react';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { BsDownload, BsFiletypePdf } from 'react-icons/bs';
import { ResumePDF } from '~/PDF/ResumePDF';
import { PDF_CONSTANTS } from '~/PDF/constants';
import type { ResumeActionLinkProps } from '~/components/ResumeSection/ResumeAction';
import { strings } from '~/utils/constants';

type ViewOrDownloadProps = ResumeActionLinkProps & {
  isFocused: boolean;
  isHovering: boolean;
  children: ReactNode;
};

export function ViewOrDownload({
  action,
  isFocused,
  isHovering,
  children,
}: ViewOrDownloadProps) {
  const [ref, animate] = useAnimate();
  const isActive = isFocused || isHovering;

  useEffect(() => {
    if (isActive) {
      animate(
        ref.current,
        { scale: [1, 1.25] },
        { duration: 0.5, ease: 'easeIn' },
      );
    } else {
      animate(
        ref.current,
        { scale: [1.25, 1] },
        { duration: 0.5, ease: 'easeOut' },
      );
    }
  }, [ref, animate, isActive]);

  const outlineStyles = isFocused
    ? {
        outline: 'solid #4793ff',
        borderRadius: 8,
      }
    : {};

  const innerOutlineStyles = isFocused
    ? {
        outline: 'solid white',
        borderRadius: 8,
        outlineOffset: 2,
      }
    : {};

  if (action === 'download') {
    return (
      <PDFDownloadLink
        className="pdf-link"
        document={<ResumePDF />}
        fileName={PDF_CONSTANTS.DOC_TITLE}
        aria-label={strings.aria.resume.download}
      >
        {children}

        <motion.div ref={ref} style={outlineStyles}>
          <div style={innerOutlineStyles}>
            <BsDownload role="presentation" className="doc-link" size={60} />
          </div>
        </motion.div>
      </PDFDownloadLink>
    );
  }

  return (
    <Link
      to="/resume"
      aria-label={strings.aria.resume.view}
      className="pdf-link"
    >
      {children}

      <motion.div ref={ref} style={outlineStyles}>
        <div style={innerOutlineStyles}>
          <BsFiletypePdf role="presentation" className="doc-link" size={60} />
        </div>
      </motion.div>
    </Link>
  );
}
