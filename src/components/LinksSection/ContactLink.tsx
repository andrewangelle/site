import { useAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { FaEnvelopeSquare } from 'react-icons/fa';
import { ActiveUnderline } from '~/components/LinksSection/ActiveUnderline';
import { activeLinkAtom } from '~/store/atoms';
import { ANCHOR_REL, activeLinkConfig, strings } from '~/utils/constants';

export function ContactLink() {
  const [activeLink, setActiveLink] = useAtom(activeLinkAtom);

  if (isMobile) {
    return (
      <div className="mobile-link">
        <h3 role="presentation">{strings.contact}</h3>
        <a
          aria-label={strings.aria.contact}
          href={strings.hrefs.contact}
          target="_blank"
          rel={ANCHOR_REL}
        >
          <FaEnvelopeSquare role="presentation" size={60} />
        </a>
      </div>
    );
  }

  return (
    <motion.a
      aria-label={strings.aria.contact}
      href={strings.hrefs.contact}
      target="_blank"
      rel={ANCHOR_REL}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveLink(strings.contact)}
      onHoverEnd={() => setActiveLink(null)}
      onFocus={() => setActiveLink(strings.contact)}
      onBlur={() => setActiveLink(null)}
      onKeyDown={(e) => {
        if (e.key === ' ') {
          window?.open(strings.hrefs.contact, ANCHOR_REL);
        }
      }}
    >
      <FaEnvelopeSquare role="presentation" size={60} />
      <ActiveUnderline isActive={activeLink === strings.contact} />
    </motion.a>
  );
}
