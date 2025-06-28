import { useAtomValue } from 'jotai/react';
import { useAnimate } from 'motion/react';
import { useEffect } from 'react';
import { usePrevious } from '~/hooks/usePrevious';
import { activeLinkAtom } from '~/store/atoms';

export function useAnimatedActiveLinkText() {
  const activeLink = useAtomValue(activeLinkAtom);
  const [ref, animate] = useAnimate();
  const previousActiveLink = usePrevious(activeLink);

  useEffect(() => {
    if (activeLink && previousActiveLink !== activeLink) {
      animate(ref.current, { opacity: 1 }, { ease: 'easeIn', duration: 0.6 });
    }

    if (!activeLink && previousActiveLink) {
      animate(ref.current, { opacity: 0 }, { ease: 'easeOut', duration: 0.5 });
    }
  }, [previousActiveLink, activeLink, ref.current, animate]);

  return ref;
}
