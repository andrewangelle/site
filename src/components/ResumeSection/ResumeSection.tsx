import { useAtom, useAtomValue, useSetAtom } from 'jotai/react';
import { useEffect } from 'react';
import { CloseResumeSection } from '~/components/ResumeSection/CloseResumeSection';
import { ResumeAction } from '~/components/ResumeSection/ResumeAction';
import {
  activeLinkAtom,
  activeViewAtom,
  linksInViewAtom,
  SECTIONS,
} from '~/store/atoms';

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
      <div data-testid="resume-section" className="pdf-links-container">
        <ResumeAction action="view" />
        <ResumeAction action="download" />
      </div>

      <CloseResumeSection />
    </>
  );
}
