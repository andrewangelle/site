import { useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { FaFilePdf } from 'react-icons/fa';
import { activeTextAtom } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

export function ResumeLink() {
  const setActiveText = useSetAtom(activeTextAtom);

  if (isMobile) {
    return (
      <div className="mobile-link">
        <h3 role="presentation">{strings.resume}</h3>
        <button
          type="button"
          aria-label={strings.aria.resume}
          onClick={() => window?.location.assign('/api/resume')}
        >
          <FaFilePdf role="presentation" size={56} />
        </button>
      </div>
    );
  }

  return (
    <motion.button
      aria-label={strings.aria.resume}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveText(strings.resume)}
      onHoverEnd={() => setActiveText(null)}
      onFocus={() => setActiveText(strings.resume)}
      onBlur={() => setActiveText(null)}
      onClick={() => window?.location.assign('/api/resume')}
    >
      <FaFilePdf role="presentation" size={56} />
    </motion.button>
  );
}
