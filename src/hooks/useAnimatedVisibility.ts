import type { Atom } from 'jotai';
import { useAtomValue } from 'jotai/react';
import type { AnimationOptions, DOMKeyframesDefinition } from 'motion/react';
import { useAnimate } from 'motion/react';
import { useEffect } from 'react';
import { usePrevious } from '~/hooks/usePrevious';

type Frames = {
  reveal: DOMKeyframesDefinition;
  hide: DOMKeyframesDefinition;
};

type Options = {
  reveal: AnimationOptions;
  hide: AnimationOptions;
};

const defaultFrames: Frames = {
  reveal: { opacity: 1 },
  hide: { opacity: 0 },
};

const defaultOptions: Options = {
  reveal: {
    ease: 'easeIn',
    duration: 0.6,
  },
  hide: {
    ease: 'easeOut',
    duration: 0.5,
  },
};

export function useAnimatedVisibility<AtomType extends Atom<string | null>>(
  atom: AtomType,
  frames = defaultFrames,
  options = defaultOptions,
) {
  const currentState = useAtomValue(atom);
  const previousState = usePrevious(currentState);
  const [ref, animate] = useAnimate();

  useEffect(() => {
    const hasActiveLinkUpdated = currentState && previousState !== currentState;
    const isStaleLinkVisibility = !currentState && previousState;

    function reveal() {
      animate(ref.current, frames.reveal, options.reveal);
    }

    function hide() {
      animate(ref.current, frames.hide, options.hide);
    }

    if (hasActiveLinkUpdated) {
      reveal();
    }

    if (isStaleLinkVisibility) {
      hide();
    }
  }, [previousState, currentState, ref.current, animate, frames, options]);

  return ref;
}
