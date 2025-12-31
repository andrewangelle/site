import { useAtom, useSetAtom } from 'jotai/react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useAnimatedBackground } from '~/hooks/useAnimatedBackground';
import { activeLinkAtom, activeViewAtom, SECTIONS } from '~/store/atoms';

export function Body({ children }: { children: ReactNode }) {
  const [activeView, setActiveView] = useAtom(activeViewAtom);
  const setActiveLink = useSetAtom(activeLinkAtom);

  const ref = useAnimatedBackground();

  useEffect(() => {
    function closeResumeSectionOnEscape(event: KeyboardEvent) {
      const isShiftTab = event.key === 'Tab' && event.shiftKey;
      const isExitingViaKeyboard = isShiftTab || event.key === 'Escape';

      if (isExitingViaKeyboard && activeView === SECTIONS.RESUME) {
        setActiveView(SECTIONS.LINKS);
        setActiveLink(null);
      }
    }

    document.addEventListener('keydown', closeResumeSectionOnEscape);

    return () => {
      document.removeEventListener('keydown', closeResumeSectionOnEscape);
    };
  }, [activeView, setActiveLink, setActiveView]);

  return <body ref={ref}>{children}</body>;
}
