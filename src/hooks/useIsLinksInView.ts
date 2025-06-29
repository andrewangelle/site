import { useAtom, useSetAtom } from 'jotai/react';
import { useInView } from 'motion/react';
import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';
import { usePrevious } from '~/hooks/usePrevious';
import { activeViewAtom, linksInViewAtom, SECTIONS } from '~/store/atoms';

export function useIsLinksInView(): [
  RefObject<HTMLDivElement | null>,
  boolean,
] {
  const linksRef = useRef<HTMLDivElement>(null);
  const isLinksInView = useInView(linksRef);
  const prevLinksInView = usePrevious(isLinksInView);
  const [isInView, setInView] = useAtom(linksInViewAtom);
  const setActiveView = useSetAtom(activeViewAtom);

  useEffect(() => {
    if (isLinksInView !== prevLinksInView) {
      setInView(isLinksInView);
      setActiveView(isLinksInView ? SECTIONS.LINKS : SECTIONS.NAME);
    }
  }, [isLinksInView, prevLinksInView, setInView, setActiveView]);

  return [linksRef, isInView];
}
