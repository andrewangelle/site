import { useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import type { RefObject } from 'react';
import { FaGithub } from 'react-icons/fa';
import { activeTextAtom } from '~/store/atoms';
import { ANCHOR_REL, activeLinkConfig, strings } from '~/utils/constants';

export function GitHubLink({
  ref,
}: {
  ref: RefObject<HTMLAnchorElement | null>;
}) {
  const setActiveText = useSetAtom(activeTextAtom);
  return (
    <motion.a
      ref={ref}
      aria-label={strings.aria.github}
      href={strings.hrefs.github}
      target="_blank"
      rel={ANCHOR_REL}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveText(strings.github)}
      onHoverEnd={() => setActiveText(null)}
      onFocus={() => setActiveText(strings.github)}
      onBlur={() => setActiveText(null)}
      onKeyDown={(e) => {
        if (e.key === ' ') {
          window?.open(strings.hrefs.github, ANCHOR_REL);
        }
      }}
    >
      <FaGithub role="presentation" size={60} />
    </motion.a>
  );
}
