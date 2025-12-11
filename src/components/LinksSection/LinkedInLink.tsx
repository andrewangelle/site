import { useAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { FaLinkedin } from 'react-icons/fa';
import { ActiveUnderline } from '~/components/LinksSection/ActiveUnderline';
import { activeLinkAtom } from '~/store/atoms';
import { ANCHOR_REL, activeLinkConfig, strings } from '~/utils/constants';

export function LinkedInLink() {
  const [activeLink, setActiveLink] = useAtom(activeLinkAtom);

  if (isMobile) {
    return (
      <div className="mobile-link">
        <h3 role="presentation">{strings.linkedin}</h3>
        <a
          aria-label={strings.aria.linkedin}
          href={strings.hrefs.linkedin}
          target="_blank"
          rel={ANCHOR_REL}
        >
          <FaLinkedin role="presentation" size={60} />
        </a>
      </div>
    );
  }

  return (
    <motion.a
      aria-label={strings.aria.linkedin}
      href={strings.hrefs.linkedin}
      target="_blank"
      rel={ANCHOR_REL}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveLink(strings.linkedin)}
      onHoverEnd={() => setActiveLink(null)}
      onFocus={() => setActiveLink(strings.linkedin)}
      onBlur={() => setActiveLink(null)}
      onKeyDown={(e) => {
        if (e.key === ' ') {
          window?.open(strings.hrefs.linkedin, ANCHOR_REL);
        }
      }}
    >
      <FaLinkedin role="presentation" size={60} />
      <ActiveUnderline isActive={activeLink === strings.linkedin} />
    </motion.a>
  );
}
