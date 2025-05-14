import { useAtomValue } from 'jotai/react';
import { motion } from 'motion/react';
import type { RefObject } from 'react';
import { isDesktop } from 'react-device-detect';
import { ActiveLink } from '~/components/LinksSection/ActiveLink';
import { ContactLink } from '~/components/LinksSection/ContactLink';
import { GitHubLink } from '~/components/LinksSection/GitHubLink';
import { LinkedInLink } from '~/components/LinksSection/LinkedInLink';
import { ViewResumeSection } from '~/components/LinksSection/ViewResumeSection';
import { ResumeSection } from '~/components/ResumeSection/ResumeSection';
import { SECTIONS, activeViewAtom } from '~/store/atoms';

export function Links({
  visibilityRef,
  githubLinkRef,
}: {
  visibilityRef: RefObject<HTMLDivElement | null>;
  githubLinkRef: RefObject<HTMLAnchorElement | null>;
}) {
  const activeView = useAtomValue(activeViewAtom);

  return (
    <div ref={visibilityRef} className="links-container">
      {activeView === SECTIONS.LINKS && (
        <>
          {isDesktop && <ActiveLink />}

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
            <GitHubLink ref={githubLinkRef} />
            <LinkedInLink />
            <ContactLink />
            <ViewResumeSection />
          </motion.div>
        </>
      )}

      {activeView === SECTIONS.RESUME && <ResumeSection />}
    </div>
  );
}
