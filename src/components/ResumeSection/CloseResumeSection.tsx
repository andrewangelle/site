import { useSetAtom } from 'jotai';
import { motion } from 'motion/react';
import { SECTIONS, activeLinkAtom, activeViewAtom } from '~/store/atoms';
import { enterExitAnimationProps, strings } from '~/utils/constants';

export function CloseResumeSection() {
  const setActiveLink = useSetAtom(activeLinkAtom);
  const setActiveView = useSetAtom(activeViewAtom);
  return (
    <motion.button
      aria-label={strings.aria.closeDownloads}
      className="close-downloads"
      type="button"
      onClick={() => {
        setActiveView(SECTIONS.LINKS);
        setActiveLink(null);
      }}
      {...enterExitAnimationProps}
    >
      <h3 role="presentation">{strings.backToLinks}</h3>
    </motion.button>
  );
}
