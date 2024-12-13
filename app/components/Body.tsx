import { useAtom } from "jotai/react";
import { useAnimate } from "motion/react";
import { ReactNode, useEffect } from "react";
import { linksInViewAtom } from "~/store/atoms";
import { colors } from "~/utils/constants";

export function Body({ children }: { children: ReactNode }) {
  const [isLinksInView] = useAtom(linksInViewAtom)
  const [ref, animate] = useAnimate()

  useEffect(() => {
    const backgroundColor = isLinksInView ? colors.red : colors.sky;
    animate(ref.current, { backgroundColor }, { ease: "linear" });
  }, [isLinksInView]);
  
  return (
    <body ref={ref}>
      {children}
    </body>
  )
}