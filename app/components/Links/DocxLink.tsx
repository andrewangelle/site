import { useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { BsFiletypeDoc } from 'react-icons/bs';

import { activeLinkAtom, isDownloadsSelectedAtom } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

export function DocxLink() {
  const setActiveLink = useSetAtom(activeLinkAtom);
  const setDownloadsSelected = useSetAtom(isDownloadsSelectedAtom);

  if (isMobile) {
    return (
      <div className="mobile-link">
        <button
          type="button"
          aria-label={strings.aria.resumeDoc}
          onClick={() => {
            window?.location.assign('/api/resume/docx');
            setDownloadsSelected(false);
            setActiveLink(null);
          }}
        >
          <BsFiletypeDoc role="presentation" className="doc-link" size={60} />
        </button>
      </div>
    );
  }

  return (
    <motion.button
      aria-label={strings.aria.resumeDoc}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onClick={() => {
        window?.location.assign('/api/resume/docx');
        setDownloadsSelected(false);
        setActiveLink(null);
      }}
    >
      <BsFiletypeDoc role="presentation" className="doc-link" size={60} />
    </motion.button>
  );
}
