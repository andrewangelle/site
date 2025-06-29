import { useAtomValue } from 'jotai/react';
import { type MotionValue, motion } from 'motion/react';
import type { RefObject } from 'react';
import { useActiveElement } from '~/hooks/useActiveElement';
import { activeViewAtom, SECTIONS } from '~/store/atoms';
import { enterExitAnimationProps, strings } from '~/utils/constants';

type NameProps = {
  nameButtonRef: RefObject<HTMLButtonElement | null>;
  nameRef: RefObject<HTMLHeadingElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  moveLeft: MotionValue<string>;
  moveRight: MotionValue<string>;
  scrollNameIntoView: () => void;
  scrollLinksIntoView: () => void;
};

export function Name({
  nameButtonRef,
  nameRef,
  titleRef,
  moveLeft,
  moveRight,
  scrollNameIntoView,
  scrollLinksIntoView,
}: NameProps) {
  const activeView = useAtomValue(activeViewAtom);
  const activeElement = useActiveElement();

  /**
   * If links section is visible, and focused element is <body/> then when the user presses tab we want the first focused element to be the first link in the section.
   * By default the name element will be the first focused element and tabbing will scroll the links out of view.
   * This edge case occurs when you view the resume PDF and click the back button
   */
  const tabIndex =
    activeView === SECTIONS.LINKS && activeElement?.tagName === 'BODY' ? -1 : 0;

  return (
    <div className="name-container" tabIndex={-1}>
      <motion.button
        data-testid="name-button"
        ref={nameButtonRef}
        tabIndex={tabIndex}
        className="inner"
        aria-label={strings.aria.name}
        {...enterExitAnimationProps}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        onFocus={scrollNameIntoView}
        onClick={scrollLinksIntoView}
        onKeyDown={(e) => {
          if (e.key === 'Tab') {
            e.preventDefault();
            scrollLinksIntoView();
          }
        }}
      >
        <motion.h1 ref={nameRef} style={{ x: moveLeft }}>
          {strings.name}
        </motion.h1>

        <motion.h2 ref={titleRef} style={{ x: moveRight }}>
          {strings.subtitle}
        </motion.h2>
      </motion.button>
    </div>
  );
}
