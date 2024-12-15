import { motion } from 'motion/react';
import type { RefObject } from 'react';
import { ContactLink } from '~/components/Links/ContactLink';
import { GitHubLink } from '~/components/Links/GitHubLink';
import { LinkedInLink } from '~/components/Links/LinkedInLink';
import { OpenDownloads } from '~/components/Links/OpenDownloads';

export function LinksSection({
  ref,
}: {
  ref: RefObject<HTMLAnchorElement | null>;
}) {
  return (
    <motion.div
      className="links"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {
          scaleX: 0,
          opacity: 0,
        },
        visible: {
          scaleX: 1,
          opacity: 1,
        },
      }}
    >
      <GitHubLink ref={ref} />
      <LinkedInLink />
      <ContactLink />
      <OpenDownloads />
    </motion.div>
  );
}
