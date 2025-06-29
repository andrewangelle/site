import type { AnimationOptions, DOMKeyframesDefinition } from 'motion/react';
import { useAnimate } from 'motion/react';
import { useEffect } from 'react';

type Frames = {
  grow: DOMKeyframesDefinition;
  shrink: DOMKeyframesDefinition;
};

type Options = {
  grow: AnimationOptions;
  shrink: AnimationOptions;
};

const defaultKeyframes: Frames = {
  grow: {
    scale: [1, 1.25],
  },
  shrink: {
    scale: [1.25, 1],
  },
};

const defaultOptions: Options = {
  grow: {
    ease: 'easeIn',
    duration: 0.375,
  },
  shrink: {
    ease: 'easeOut',
    duration: 0.375,
  },
};

export function useAnimatedSize(
  isActive = false,
  frames = defaultKeyframes,
  options = defaultOptions,
) {
  const [ref, animate] = useAnimate();

  useEffect(() => {
    function grow() {
      animate(ref.current, frames.grow, options.grow);
    }

    function shrink() {
      animate(ref.current, frames.shrink, options.shrink);
    }

    if (isActive) {
      grow();
    } else {
      shrink();
    }
  }, [ref, animate, isActive, options, frames]);

  return ref;
}
