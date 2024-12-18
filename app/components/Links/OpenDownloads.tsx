import { useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { IoDocumentText } from 'react-icons/io5';
import { activeLinkAtom, isDownloadsSelectedAtom } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

export function OpenDownloads() {
  const setActiveLink = useSetAtom(activeLinkAtom);
  const setDownloadsSelected = useSetAtom(isDownloadsSelectedAtom);

  if (isMobile) {
    return (
      <div className="mobile-link">
        <h3 role="presentation">{strings.resume}</h3>
        <button
          type="button"
          aria-label={strings.aria.resume}
          onClick={() => {
            setDownloadsSelected(true);
            setActiveLink(strings.resume);
          }}
        >
          <IoDocumentText role="presentation" size={56} />
        </button>
      </div>
    );
  }

  return (
    <motion.button
      aria-label={strings.aria.resume}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveLink(strings.resume)}
      onHoverEnd={() => setActiveLink(null)}
      onFocus={() => setActiveLink(strings.resume)}
      onBlur={() => setActiveLink(null)}
      onClick={() => {
        setDownloadsSelected(true);
        setActiveLink(strings.resume);
      }}
    >
      <IoDocumentText role="presentation" size={60} />
    </motion.button>
  );
}
