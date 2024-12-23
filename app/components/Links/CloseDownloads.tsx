import { useSetAtom } from 'jotai';
import { motion } from 'motion/react';
import { activeLinkAtom, isDownloadsSelectedAtom } from '~/store/atoms';
import { strings } from '~/utils/constants';

export function CloseDownloads() {
  const setActiveLink = useSetAtom(activeLinkAtom);
  const setisDownloadsSelected = useSetAtom(isDownloadsSelectedAtom);

  return (
    <motion.button
      aria-label={strings.aria.closeDownloads}
      className="close-downloads"
      type="button"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {
          scaleX: 0,
          opacity: 0,
        },
        visible: {
          scaleX: 1,
          opacity: 1,
        },
      }}
      onClick={() => {
        setisDownloadsSelected(false);
        setActiveLink(null);
      }}
    >
      <h3 role="presentation">{strings.backToLinks}</h3>
    </motion.button>
  );
}
