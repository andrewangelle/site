import { useAnimate } from 'motion/react';
import { useEffect } from 'react';
import { colors } from '~/utils/constants';
import { useIsLinksInView } from '~/utils/useIsLinksInView';

export function useAnimatedBackground() {
  const [, isLinksInView] = useIsLinksInView();
  const [ref, animate] = useAnimate();

  useEffect(() => {
    const backgroundColor = isLinksInView ? colors.red : colors.sky;
    animate(ref.current, { backgroundColor }, { ease: 'linear' });
  }, [isLinksInView, animate, ref.current]);

  return ref;
}
