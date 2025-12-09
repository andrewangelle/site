import { useAtom, useAtomValue, useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { CloseResumeSection } from '~/components/ResumeSection/CloseResumeSection';
import { ResumeAction } from '~/components/ResumeSection/ResumeAction';
import {
  activeLinkAtom,
  activeViewAtom,
  linksInViewAtom,
  SECTIONS,
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
      <motion.div
        data-testid="resume-section"
        className="pdf-links-container"
        onHoverEnd={() => setActiveLink(strings.resume)}
        onBlur={() => setActiveLink(strings.resume)}
      >
        <ResumeAction action="view" />
        <ResumeAction action="download" />
      </motion.div>

      <CloseResumeSection />
    </>
  );
}
