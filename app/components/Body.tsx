import { useAnimate } from 'motion/react';
import { type ReactNode, useEffect } from 'react';
import { colors } from '~/utils/constants';
import { useIsLinksInView } from '~/utils/useIsLinksInView';

export function Body({ children }: { children: ReactNode }) {
  const [, isLinksInView] = useIsLinksInView();
  const [ref, animate] = useAnimate();

  useEffect(() => {
    const backgroundColor = isLinksInView ? colors.red : colors.sky;
    animate(ref.current, { backgroundColor }, { ease: 'linear' });
  }, [isLinksInView, animate, ref.current]);

  return <body ref={ref}>{children}</body>;
}
