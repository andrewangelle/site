import { useAtomValue } from 'jotai/react';
import { type MotionValue, motion } from 'motion/react';
import type { RefObject } from 'react';
import { SECTIONS, activeViewAtom } from '~/store/atoms';
import { strings } from '~/utils/constants';

export function Name({
  nameButtonRef,
  nameRef,
  subTitleRef,
  moveLeft,
  moveRight,
  scrollNameIntoView,
  scrollLinksIntoView,
}: {
  nameButtonRef: RefObject<HTMLButtonElement | null>;
  nameRef: RefObject<HTMLHeadingElement | null>;
  subTitleRef: RefObject<HTMLHeadingElement | null>;
  moveLeft: MotionValue<string>;
  moveRight: MotionValue<string>;
  scrollNameIntoView: () => void;
  scrollLinksIntoView: () => void;
}) {
  const activeView = useAtomValue(activeViewAtom);

  return (
    <div className="name-container" tabIndex={-1}>
      <motion.button
        ref={nameButtonRef}
        tabIndex={activeView === SECTIONS.LINKS ? 0 : -1}
        className="inner"
        aria-label={strings.aria.name}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        onFocus={scrollNameIntoView}
        onClick={scrollLinksIntoView}
      >
        <motion.h1 ref={nameRef} style={{ x: moveLeft }}>
          {strings.name}
        </motion.h1>

        <motion.h2 ref={subTitleRef} style={{ x: moveRight }}>
          {strings.subtitle}
        </motion.h2>
      </motion.button>
    </div>
  );
}
