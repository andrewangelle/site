import { useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { BsFiletypeDocx } from 'react-icons/bs';

import { activeTextAtom, isDownloadsSelectedAtom } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

export function DocxLink() {
  const setActiveText = useSetAtom(activeTextAtom);
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
            setActiveText(null);
          }}
        >
          <BsFiletypeDocx role="presentation" className="docx-link" size={60} />
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
        setActiveText(null);
      }}
    >
      <BsFiletypeDocx role="presentation" className="docx-link" size={60} />
    </motion.button>
  );
}