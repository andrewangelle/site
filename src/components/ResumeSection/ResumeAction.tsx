import { useSetAtom } from 'jotai';
import { motion } from 'motion/react';
import { ViewOrDownload } from '~/components/ResumeSection/ViewOrDownload';
import { SECTIONS, activeLinkAtom, activeViewAtom } from '~/store/atoms';
import { enterExitAnimationProps, strings } from '~/utils/constants';

export type ResumeActionLinkProps = { action: 'view' | 'download' };

export function ResumeAction({ action }: ResumeActionLinkProps) {
  const setActiveLink = useSetAtom(activeLinkAtom);
  const setActiveView = useSetAtom(activeViewAtom);

  function viewOrDownload() {
    const query = action === 'download' ? '?action=download' : '';
    window?.location.assign(`/api/resume/pdf${query}`);
    setActiveView(SECTIONS.LINKS);
    setActiveLink(null);
  }

  return (
    <div className="pdf-link">
      <motion.h3 {...enterExitAnimationProps} onClick={viewOrDownload}>
        {strings[action]}
      </motion.h3>

      <motion.div className="links" {...enterExitAnimationProps}>
        <ViewOrDownload action={action} onClick={viewOrDownload} />
      </motion.div>
    </div>
  );
}
