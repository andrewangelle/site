import { useAtom, useSetAtom } from 'jotai/react';
import { useInView } from 'motion/react';
import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';
import { usePrevious } from '~/hooks/usePrevious';
import {
  activeLinkAtom,
  activeViewAtom,
  linksInViewAtom,
  SECTIONS,
} from '~/store/atoms';

export function useIsLinksInView(): [
  RefObject<HTMLDivElement | null>,
  boolean,
] {
  const linksRef = useRef<HTMLDivElement>(null);
  const isLinksInView = useInView(linksRef);
  const prevLinksInView = usePrevious(isLinksInView);
  const [isInView, setInView] = useAtom(linksInViewAtom);
  const setActiveView = useSetAtom(activeViewAtom);
  const setActiveLink = useSetAtom(activeLinkAtom);

  useEffect(() => {
    if (isLinksInView !== prevLinksInView) {
      const nextView = isLinksInView ? SECTIONS.LINKS : SECTIONS.NAME;

      setInView(isLinksInView);
      setActiveView(nextView);

      // reset active link when switching from links view to name view
      if (nextView === SECTIONS.NAME) {
        setActiveLink(null);
      }
    }
  }, [isLinksInView, prevLinksInView, setInView, setActiveView, setActiveLink]);

  return [linksRef, isInView];
}
