import { useAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { FaEnvelopeSquare } from 'react-icons/fa';
import { activeTextAtom } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

export function ContactLink() {
  const [, setActiveText] = useAtom(activeTextAtom);

  return (
    <motion.a
      aria-label={strings.aria.contact}
      href={strings.hrefs.contact}
      target="_blank"
      rel="noopener noreferrer"
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveText(strings.contact)}
      onHoverEnd={() => setActiveText(null)}
      onFocus={() => setActiveText(strings.contact)}
      onBlur={() => setActiveText(null)}
    >
      <FaEnvelopeSquare role="presentation" size={60} />
    </motion.a>
  );
}
