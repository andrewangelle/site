import { useAtomValue } from 'jotai';
import { useEffect, useRef } from 'react';
import { useActiveElement } from '~/hooks/useActiveElement';
import { usePrevious } from '~/hooks/usePrevious';
import { activeViewAtom, SECTIONS } from '~/store/atoms';

export function useElementRefs() {
  const nameSection = useRef<HTMLElement>(null);
  const nameButton = useRef<HTMLButtonElement>(null);
  const nameText = useRef<HTMLDivElement>(null);
  const linksSection = useRef<HTMLElement>(null);
  const githubLink = useRef<HTMLAnchorElement>(null);
  const linkedinLink = useRef<HTMLAnchorElement>(null);
  const contactLink = useRef<HTMLAnchorElement>(null);
  const viewResumeSection = useRef<HTMLButtonElement>(null);
  const activeElement = useActiveElement();
  const activeView = useAtomValue(activeViewAtom);
  const prevActiveView = usePrevious(activeView);

  function scrollLinksIntoView() {
    nameButton?.current?.blur();
    linksSection?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollNameIntoView() {
    nameSection?.current?.scrollIntoView({ behavior: 'smooth' });
    nameButton?.current?.focus();
  }

  // auto focus first link when links section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const [bodyEl] = document.getElementsByTagName('body');

            if (
              // moving to links section
              prevActiveView !== activeView &&
              activeView === SECTIONS.LINKS &&
              // no element is focused
              activeElement === bodyEl
            ) {
              githubLink.current?.focus();
            }
          }
        });
      },
      { threshold: 0.75 },
    );

    if (linksSection?.current) {
      observer.observe(linksSection?.current);
    }

    return () => observer.disconnect();
  }, [activeElement, activeView, prevActiveView]);

  return {
    name: {
      section: nameSection,
      button: nameButton,
      text: nameText,
      scrollIntoView: scrollNameIntoView,
    },
    links: {
      section: linksSection,
      githubLink,
      linkedinLink,
      contactLink,
      viewResumeSection,
      scrollIntoView: scrollLinksIntoView,
    },
  };
}
