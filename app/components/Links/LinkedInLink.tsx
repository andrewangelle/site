import { useAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { FaLinkedin } from 'react-icons/fa';
import { activeTextAtom } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

export function LinkedInLink() {
  const [, setActiveText] = useAtom(activeTextAtom);

  return (
    <motion.a
      aria-label={strings.aria.linkedin}
      href={strings.hrefs.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveText(strings.linkedin)}
      onHoverEnd={() => setActiveText(null)}
      onFocus={() => setActiveText(strings.linkedin)}
      onBlur={() => setActiveText(null)}
    >
      <FaLinkedin role="presentation" size={60} />
    </motion.a>
  );
}
