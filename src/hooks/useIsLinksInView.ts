import { useAtom } from 'jotai/react';
import { useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { usePrevious } from '~/hooks/usePrevious';
import { linksInViewAtom } from '~/store/atoms';

export function useIsLinksInView(): [
  RefObject<HTMLDivElement | null>,
  boolean,
] {
  const linksRef = useRef<HTMLDivElement>(null);
  const isLinksInView = useInView(linksRef);
  const prevLinksInView = usePrevious(isLinksInView);
  const [isInView, setInView] = useAtom(linksInViewAtom);

  useEffect(() => {
    if (isLinksInView !== prevLinksInView) {
      setInView(isLinksInView);
    }
  }, [isLinksInView, prevLinksInView, setInView]);

  return [linksRef, isInView];
}
