import { useSetAtom } from 'jotai';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { BsDownload } from 'react-icons/bs';
import { activeLinkAtom, isDownloadsSelectedAtom } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

export function DownloadPDFLink() {
  const setActiveLink = useSetAtom(activeLinkAtom);
  const setDownloadsSelected = useSetAtom(isDownloadsSelectedAtom);

  if (isMobile) {
    return (
      <div className="mobile-link">
        <button
          type="button"
          aria-label={strings.aria.resume}
          onClick={() => {
            window?.location.assign('/api/resume/pdf?action=download');
            setDownloadsSelected(false);
            setActiveLink(null);
          }}
        >
          <BsDownload role="presentation" className="doc-link" size={60} />
        </button>
      </div>
    );
  }

  return (
    <motion.button
      aria-label={strings.aria.resumePdf}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onClick={() => {
        window?.location.assign('/api/resume/pdf?action=download');
        setDownloadsSelected(false);
        setActiveLink(null);
      }}
    >
      <BsDownload role="presentation" className="doc-link" size={60} />
    </motion.button>
  );
}
