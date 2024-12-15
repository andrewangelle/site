import { useAtom, useAtomValue, useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { CloseDownloads } from '~/components/Links/CloseDownloads';
import { DocxLink } from '~/components/Links/DocxLink';
import { PDFLink } from '~/components/Links/PDFLink';
import {
  activeTextAtom,
  isDownloadsSelectedAtom,
  linksInViewAtom,
} from '~/store/atoms';
import { strings } from '~/utils/constants';

export function DownloadsSection() {
  const isLinksInView = useAtomValue(linksInViewAtom);
  const [isDownloadsSelected, setDownloadsSelected] = useAtom(
    isDownloadsSelectedAtom,
  );
  const setActiveText = useSetAtom(activeTextAtom);

  useEffect(() => {
    if (!isLinksInView && isDownloadsSelected) {
      setDownloadsSelected(false);
      setActiveText(null);
    }
  }, [isLinksInView, isDownloadsSelected, setDownloadsSelected, setActiveText]);

  return (
    <>
      <motion.h3
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
      >
        {strings.downloads}
      </motion.h3>

      <motion.div
        className="links"
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
      >
        <PDFLink />
        <DocxLink />
      </motion.div>

      <CloseDownloads />
    </>
  );
}
