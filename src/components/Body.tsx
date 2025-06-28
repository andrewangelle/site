import { useAtom } from 'jotai/react';
import type { KeyboardEvent, ReactNode } from 'react';
import { useAnimatedBackground } from '~/hooks/useAnimatedBackground';
import { activeViewAtom, SECTIONS } from '~/store/atoms';

export function Body({ children }: { children: ReactNode }) {
  const [activeView, setActiveView] = useAtom(activeViewAtom);
  const ref = useAnimatedBackground();

  function closeResumeSectionOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && activeView === SECTIONS.RESUME) {
      setActiveView(SECTIONS.LINKS);
    }
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: This is intentional for keyboard navigation
    <body ref={ref} onKeyDown={closeResumeSectionOnEscape}>
      {children}
    </body>
  );
}
