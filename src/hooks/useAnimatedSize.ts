import { useAnimate } from 'motion/react';
import type { ValueAnimationTransition } from 'motion/react';
import { useEffect } from 'react';

export type UseAnimatedSizeOptions = {
  initialSize: number;
  size: number;
  duration: number;
  easeOnGrow: ValueAnimationTransition['ease'];
  easeOnShrink: ValueAnimationTransition['ease'];
};

const defaultOptions: UseAnimatedSizeOptions = {
  initialSize: 1,
  size: 1.25,
  duration: 0.375,
  easeOnGrow: 'easeIn',
  easeOnShrink: 'easeOut',
};

export function useAnimatedSize(
  isActive = false,
  options: Partial<UseAnimatedSizeOptions> = defaultOptions,
) {
  const [ref, animate] = useAnimate();

  useEffect(() => {
    function grow() {
      animate(
        ref.current,
        { scale: [options?.initialSize, options?.size] },
        { duration: options.duration, ease: options.easeOnGrow },
      );
    }

    function shrink() {
      animate(
        ref.current,
        { scale: [options?.size, options?.initialSize] },
        { duration: options.duration, ease: options.easeOnShrink },
      );
    }

    if (isActive) {
      grow();
    } else {
      shrink();
    }
  }, [ref, animate, isActive, options]);

  return ref;
}
