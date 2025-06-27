import { motion } from 'motion/react';
import { ViewOrDownload } from '~/components/ResumeSection/ViewOrDownload';
import { enterExitAnimationProps, strings } from '~/utils/constants';

export type ResumeActionLinkProps = { action: 'view' | 'download' };

export function ResumeAction({ action }: ResumeActionLinkProps) {
  return (
    <div className="pdf-link">
      <motion.h3 {...enterExitAnimationProps}>{strings[action]}</motion.h3>

      <motion.div className="links" {...enterExitAnimationProps}>
        <ViewOrDownload action={action} />
      </motion.div>
    </div>
  );
}
