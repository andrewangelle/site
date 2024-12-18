import { useAtom, useAtomValue, useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { CloseDownloads } from '~/components/Links/CloseDownloads';
import { DocxLink } from '~/components/Links/DocxLink';
import { PDFLink } from '~/components/Links/PDFLink';
import { TxtLink } from '~/components/Links/TxtLink';
import {
  activeLinkAtom,
  isDownloadsSelectedAtom,
  linksInViewAtom,
} from '~/store/atoms';
import { strings } from '~/utils/constants';

export function DownloadsSection() {
  const isLinksInView = useAtomValue(linksInViewAtom);
  const [isDownloadsSelected, setDownloadsSelected] = useAtom(
    isDownloadsSelectedAtom,
  );
  const setActiveLink = useSetAtom(activeLinkAtom);

  useEffect(() => {
    if (!isLinksInView && isDownloadsSelected) {
      setDownloadsSelected(false);
      setActiveLink(null);
    }
  }, [isLinksInView, isDownloadsSelected, setDownloadsSelected, setActiveLink]);

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
        <TxtLink />
        <DocxLink />
      </motion.div>

      <CloseDownloads />
    </>
  );
}
