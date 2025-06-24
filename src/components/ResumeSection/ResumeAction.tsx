import { PDFDownloadLink } from '@react-pdf/renderer';
import { useNavigate } from '@tanstack/react-router';
import { useSetAtom } from 'jotai';
import { motion } from 'motion/react';
import { ResumePDF } from '~/PDF/ResumePDF';
import { ViewOrDownload } from '~/components/ResumeSection/ViewOrDownload';
import { SECTIONS, activeLinkAtom, activeViewAtom } from '~/store/atoms';
import { enterExitAnimationProps, strings } from '~/utils/constants';

export type ResumeActionLinkProps = { action: 'view' | 'download' };

export function ResumeAction({ action }: ResumeActionLinkProps) {
  const navigate = useNavigate();
  const setActiveLink = useSetAtom(activeLinkAtom);
  const setActiveView = useSetAtom(activeViewAtom);
  function viewOrDownload() {
    if (action === 'view') {
      navigate({ to: '/resume' });
    }
    setActiveView(SECTIONS.LINKS);
    setActiveLink(null);
  }

  return (
    <div className="pdf-link">
      <motion.h3 {...enterExitAnimationProps} onClick={viewOrDownload}>
        {action === 'download' ? (
          <PDFDownloadLink
            document={<ResumePDF />}
            style={{ textDecoration: 'none' }}
            tabIndex={-1}
          >
            {strings[action]}
          </PDFDownloadLink>
        ) : (
          <>{strings[action]}</>
        )}
      </motion.h3>

      <motion.div className="links" {...enterExitAnimationProps}>
        <ViewOrDownload action={action} />
      </motion.div>
    </div>
  );
}
