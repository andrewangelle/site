import { useAtomValue } from 'jotai/react';
import { useAnimate } from 'motion/react';
import { useEffect } from 'react';
import { linksInViewAtom } from '~/store/atoms';
import { colors } from '~/utils/constants';

export function useAnimatedTitle() {
  const [ref, animate] = useAnimate();
  const isLinksInView = useAtomValue(linksInViewAtom);

  useEffect(() => {
    const color = isLinksInView ? colors.sky : colors.red;
    animate(ref.current, { color }, { ease: 'linear' });
  }, [isLinksInView, animate, ref.current]);

  return ref;
}
