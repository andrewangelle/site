import { useAtom, useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import type { RefObject } from 'react';
import { isMobile } from 'react-device-detect';
import { IoDocumentText } from 'react-icons/io5';
import { ActiveUnderline } from '~/components/LinksSection/ActiveUnderline';
import { activeLinkAtom, activeViewAtom, SECTIONS } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

type ViewResumeSectionProps = {
  ref: RefObject<HTMLButtonElement | null>;
};

export function ViewResumeSection({ ref }: ViewResumeSectionProps) {
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
      ref={ref}
      aria-label={strings.aria.resume.open}
      style={{ position: 'relative' }}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => {
        ref.current?.focus();
        setActiveLink(strings.resume);
      }}
      onHoverEnd={() => {
        setActiveLink(null);
        ref.current?.blur();
      }}
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
