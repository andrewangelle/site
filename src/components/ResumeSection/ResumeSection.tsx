import { useAtom, useAtomValue, useSetAtom } from 'jotai/react';
import { useEffect } from 'react';
import { CloseResumeSection } from '~/components/ResumeSection/CloseResumeSection';
import { DownloadPDFLink } from '~/components/ResumeSection/DownloadPDFLink';
import { ResumeLink } from '~/components/ResumeSection/ResumeLink';
import { ViewPDFLink } from '~/components/ResumeSection/ViewPDFLink';
import {
  SECTIONS,
  activeLinkAtom,
  activeViewAtom,
  linksInViewAtom,
} from '~/store/atoms';
import { strings } from '~/utils/constants';

export function ResumeSection() {
  const isLinksInView = useAtomValue(linksInViewAtom);
  const [activeView, setActiveView] = useAtom(activeViewAtom);
  const setActiveLink = useSetAtom(activeLinkAtom);

  useEffect(() => {
    if (!isLinksInView && activeView === SECTIONS.RESUME) {
      setActiveView(SECTIONS.LINKS);
      setActiveLink(null);
    }
  }, [isLinksInView, activeView, setActiveView, setActiveLink]);

  return (
    <>
      <div className="pdf-links-container">
        <ResumeLink label={strings.view}>
          <ViewPDFLink />
        </ResumeLink>

        <ResumeLink label={strings.downloads}>
          <DownloadPDFLink />
        </ResumeLink>
      </div>

      <CloseResumeSection />
    </>
  );
}
