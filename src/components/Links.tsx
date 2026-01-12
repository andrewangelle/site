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
import { activeViewAtom, SECTIONS } from '~/store/atoms';
import { enterExitAnimationProps } from '~/utils/constants';

type LinksProps = {
  visibilityRef: RefObject<HTMLDivElement | null>;
  githubLinkRef: RefObject<HTMLAnchorElement | null>;
  linkedinLinkRef: RefObject<HTMLAnchorElement | null>;
  contactLinkRef: RefObject<HTMLAnchorElement | null>;
  viewResumeSectionRef: RefObject<HTMLButtonElement | null>;
};

export function Links({
  visibilityRef,
  githubLinkRef,
  linkedinLinkRef,
  contactLinkRef,
  viewResumeSectionRef,
}: LinksProps) {
  const activeView = useAtomValue(activeViewAtom);

  return (
    <div ref={visibilityRef} className="links-container">
      {isDesktop && <ActiveLink />}
      {activeView === SECTIONS.LINKS && (
        <motion.div className="links" {...enterExitAnimationProps}>
          <GitHubLink ref={githubLinkRef} />
          <LinkedInLink ref={linkedinLinkRef} />
          <ContactLink ref={contactLinkRef} />
          <ViewResumeSection ref={viewResumeSectionRef} />
        </motion.div>
      )}

      {activeView === SECTIONS.RESUME && <ResumeSection />}
    </div>
  );
}
