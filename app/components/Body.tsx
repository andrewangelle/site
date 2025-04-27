import { useAtom } from 'jotai/react';
import type { KeyboardEvent, ReactNode } from 'react';
import { useAnimatedBackground } from '~/hooks/useAnimatedBackground';
import { SECTIONS, activeViewAtom } from '~/store/atoms';

export function Body({ children }: { children: ReactNode }) {
  const [activeView, setActiveView] = useAtom(activeViewAtom);
  const ref = useAnimatedBackground();

  function closeResumeSectionOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && activeView === SECTIONS.RESUME) {
      setActiveView(SECTIONS.LINKS);
    }
  }

  return (
    <body ref={ref} onKeyDown={closeResumeSectionOnEscape}>
      {children}
    </body>
  );
}
