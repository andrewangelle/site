import { useAtom } from 'jotai/react';
import { useAnimate } from 'motion/react';
import { useEffect } from 'react';
import { activeTextAtom } from '~/store/atoms';
import { usePrevious } from './usePrevious';

export function useActiveTextRef() {
  const [activeText] = useAtom(activeTextAtom);
  const [activeTextRef, animate] = useAnimate();
  const previousActiveText = usePrevious(activeText);

  useEffect(() => {
    if (activeText && previousActiveText !== activeText) {
      animate(
        activeTextRef.current,
        { opacity: 1 },
        { ease: 'easeIn', duration: 0.75 },
      );
    }

    if (!activeText && previousActiveText) {
      animate(
        activeTextRef.current,
        { opacity: 0 },
        { ease: 'easeOut', duration: 0.5 },
      );
    }
  }, [previousActiveText, activeText, activeTextRef.current, animate]);

  return activeTextRef;
}
