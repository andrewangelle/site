import { useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { FaLinkedin } from 'react-icons/fa';
import { activeTextAtom } from '~/store/atoms';
import { ANCHOR_REL, activeLinkConfig, strings } from '~/utils/constants';

export function LinkedInLink() {
  const setActiveText = useSetAtom(activeTextAtom);
  return (
    <motion.a
      aria-label={strings.aria.linkedin}
      href={strings.hrefs.linkedin}
      target="_blank"
      rel={ANCHOR_REL}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveText(strings.linkedin)}
      onHoverEnd={() => setActiveText(null)}
      onFocus={() => setActiveText(strings.linkedin)}
      onBlur={() => setActiveText(null)}
      onKeyDown={(e) => {
        if (e.key === ' ') {
          window?.open(strings.hrefs.linkedin, ANCHOR_REL);
        }
      }}
    >
      <FaLinkedin role="presentation" size={60} />
    </motion.a>
  );
}
