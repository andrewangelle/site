import { useAtom, useAtomValue, useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { CloseDownloads } from '~/components/Links/CloseDownloads';
import { DownloadPDFLink } from '~/components/Links/DownloadPDFLink';
import { ViewPDFLink } from '~/components/Links/ViewPDFLink';
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
      <div className="pdf-links-container">
        <LinkAction label={strings.view}>
          <ViewPDFLink />
        </LinkAction>

        <LinkAction label={strings.downloads}>
          <DownloadPDFLink />
        </LinkAction>
      </div>

      <CloseDownloads />
    </>
  );
}

function LinkAction({
  label,
  children,
}: { label: string; children: React.ReactNode }) {
  return (
    <div className="pdf-link">
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
        {label}
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
        {children}
      </motion.div>
    </div>
  );
}
