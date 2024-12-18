import { useAtom } from 'jotai';
import type { KeyboardEvent, ReactNode } from 'react';
import { useAnimatedBackground } from '~/hooks/useAnimatedBackground';
import { isDownloadsSelectedAtom } from '~/store/atoms';

export function Body({ children }: { children: ReactNode }) {
  const [isDownloadsSelected, setDownloadsSelected] = useAtom(
    isDownloadsSelectedAtom,
  );
  const ref = useAnimatedBackground();

  function closeDownloadsSectionOnEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && isDownloadsSelected) {
      setDownloadsSelected(false);
    }
  }

  return (
    <body ref={ref} onKeyDown={closeDownloadsSectionOnEscape}>
      {children}
    </body>
  );
}
