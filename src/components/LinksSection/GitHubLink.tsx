import { useAtom } from 'jotai/react';
import { motion } from 'motion/react';
import type { RefObject } from 'react';
import { isMobile } from 'react-device-detect';
import { FaGithub } from 'react-icons/fa';
import { ActiveUnderline } from '~/components/LinksSection/ActiveUnderline';
import { activeLinkAtom } from '~/store/atoms';
import { ANCHOR_REL, activeLinkConfig, strings } from '~/utils/constants';

type GithubLinkProps = {
  ref: RefObject<HTMLAnchorElement | null>;
};

export function GitHubLink({ ref }: GithubLinkProps) {
  const [activeLink, setActiveLink] = useAtom(activeLinkAtom);

  if (isMobile) {
    return (
      <div className="mobile-link">
        <h3 role="presentation">{strings.github}</h3>
        <a
          ref={ref}
          aria-label={strings.aria.github}
          href={strings.hrefs.github}
          target="_blank"
          rel={ANCHOR_REL}
        >
          <FaGithub role="presentation" size={60} />
        </a>
      </div>
    );
  }

  return (
    <motion.a
      ref={ref}
      aria-label={strings.aria.github}
      href={strings.hrefs.github}
      target="_blank"
      rel={ANCHOR_REL}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onHoverStart={() => setActiveLink(strings.github)}
      onHoverEnd={() => setActiveLink(null)}
      onFocus={() => setActiveLink(strings.github)}
      onBlur={() => setActiveLink(null)}
      onKeyDown={(e) => {
        if (e.key === ' ') {
          window?.open(strings.hrefs.github, ANCHOR_REL);
        }
      }}
    >
      <FaGithub role="presentation" size={60} />
      <ActiveUnderline isActive={activeLink === strings.github} />
    </motion.a>
  );
}
