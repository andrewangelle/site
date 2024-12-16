import { useSetAtom } from 'jotai';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { GrDocumentPdf } from 'react-icons/gr';
import { activeTextAtom, isDownloadsSelectedAtom } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

export function PDFLink() {
  const setActiveText = useSetAtom(activeTextAtom);
  const setDownloadsSelected = useSetAtom(isDownloadsSelectedAtom);

  if (isMobile) {
    return (
      <div className="mobile-link">
        <button
          type="button"
          aria-label={strings.aria.resume}
          onClick={() => {
            window?.location.assign('/api/resume/pdf');
            setDownloadsSelected(false);
            setActiveText(null);
          }}
        >
          <GrDocumentPdf role="presentation" size={56} strokeWidth={2} />
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
        window?.location.assign('/api/resume/pdf');
        setDownloadsSelected(false);
        setActiveText(null);
      }}
    >
      <GrDocumentPdf role="presentation" size={56} strokeWidth={0.5} />
    </motion.button>
  );
}