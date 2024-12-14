import type { RefObject } from 'react';
import { isMobile } from 'react-device-detect';
import { ActiveText } from '~/components/ActiveText';
import { ContactLink } from '~/components/Links/ContactLink';
import { GitHubLink } from '~/components/Links/GitHubLink';
import { LinkedInLink } from '~/components/Links/LinkedInLink';
import { MobileLinks } from '~/components/Links/MobileLinks';
import { ResumeLink } from '~/components/Links/ResumeLink';

export function LinksSection({
  ref,
}: {
  ref: RefObject<HTMLAnchorElement | null>;
}) {
  if (isMobile) {
    return <MobileLinks ref={ref} />;
  }

  return (
    <>
      <ActiveText />

      <div className="links">
        <GitHubLink ref={ref} />
        <LinkedInLink />
        <ContactLink />
        <ResumeLink />
      </div>
    </>
  );
}
