import { useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { FaEnvelopeSquare } from 'react-icons/fa';
import { activeTextAtom } from '~/store/atoms';
import { ANCHOR_REL, activeLinkConfig, strings } from '~/utils/constants';

export function ContactLink() {
  const setActiveText = useSetAtom(activeTextAtom);
  return (
    <motion.a
      aria-label={strings.aria.contact}
      href={strings.hrefs.contact}
      target="_blank"
      rel={ANCHOR_REL}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveText(strings.contact)}
      onHoverEnd={() => setActiveText(null)}
      onFocus={() => setActiveText(strings.contact)}
      onBlur={() => setActiveText(null)}
      onKeyDown={(e) => {
        if (e.key === ' ') {
          window?.open(strings.hrefs.contact, ANCHOR_REL);
        }
      }}
    >
      <FaEnvelopeSquare role="presentation" size={60} />
    </motion.a>
  );
}
