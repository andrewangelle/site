import { useAtom, useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { IoDocumentText } from 'react-icons/io5';
import { ActiveUnderline } from '~/components/LinksSection/ActiveUnderline';
import { activeLinkAtom, activeViewAtom, SECTIONS } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

export function ViewResumeSection() {
  const [activeLink, setActiveLink] = useAtom(activeLinkAtom);
  const setActiveView = useSetAtom(activeViewAtom);

  if (isMobile) {
    return (
      <div className="mobile-link">
        <h3 role="presentation">{strings.resume}</h3>
        <button
          type="button"
          aria-label={strings.aria.resume.view}
          onClick={() => {
            setActiveView(SECTIONS.RESUME);
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
      aria-label={strings.aria.resume.open}
      style={{ position: 'relative' }}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveLink(strings.resume)}
      onHoverEnd={() => setActiveLink(null)}
      onFocus={() => setActiveLink(strings.resume)}
      onBlur={() => setActiveLink(null)}
      onClick={() => {
        setActiveView(SECTIONS.RESUME);
        setActiveLink(strings.resume);
      }}
    >
      <IoDocumentText role="presentation" size={60} />
      <ActiveUnderline isActive={activeLink === strings.resume} />
    </motion.button>
  );
}
