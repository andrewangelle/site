import { useAtomValue } from 'jotai/react';
import { useAnimate } from 'motion/react';
import { useEffect } from 'react';
import { linksInViewAtom } from '~/store/atoms';
import { colors } from '~/utils/constants';

export function useAnimatedBackground() {
  const [ref, animate] = useAnimate();
  const isLinksInView = useAtomValue(linksInViewAtom);

  useEffect(() => {
    const backgroundColor = isLinksInView ? colors.red : colors.sky;
    animate(ref.current, { backgroundColor }, { ease: 'linear' });
  }, [isLinksInView, animate, ref.current]);

  return ref;
}
