import { useRef } from 'react';

export function useElementRefs() {
  const nameSection = useRef<HTMLElement>(null);
  const nameButton = useRef<HTMLButtonElement>(null);
  const nameText = useRef<HTMLDivElement>(null);
  const linksSection = useRef<HTMLElement>(null);
  const githubLink = useRef<HTMLAnchorElement>(null);

  function scrollLinksIntoView() {
    linksSection?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollNameIntoView() {
    nameSection?.current?.scrollIntoView({ behavior: 'smooth' });
  }

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
      scrollIntoView: scrollLinksIntoView,
    },
  };
}
