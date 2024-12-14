import { useAtom } from "jotai";
import { useInView } from "motion/react";
import { useRef, useEffect, RefObject } from "react";
import { linksInViewAtom } from "~/store/atoms";
import { usePrevious } from "./usePrevious";

export function useIsLinksInView(): [
  RefObject<HTMLDivElement | null>,
  boolean
] {
  const linksRef = useRef<HTMLDivElement>(null);
  const isLinksInView = useInView(linksRef);
  const prevLinksInView = usePrevious(isLinksInView)
  const [isInView, setInView] = useAtom(linksInViewAtom)

  useEffect(() => {
    if(isLinksInView !== prevLinksInView) {
      setInView(isLinksInView)
    }
  }, [isLinksInView, prevLinksInView]);

  return [linksRef, isInView]
}