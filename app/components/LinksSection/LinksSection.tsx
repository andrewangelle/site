import { motion } from 'motion/react';
import type { RefObject } from 'react';
import { ContactLink } from '~/components/LinksSection/ContactLink';
import { GitHubLink } from '~/components/LinksSection/GitHubLink';
import { LinkedInLink } from '~/components/LinksSection/LinkedInLink';
import { ViewResumeSection } from '~/components/LinksSection/ViewResumeSection';

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
      <ViewResumeSection />
    </motion.div>
  );
}
