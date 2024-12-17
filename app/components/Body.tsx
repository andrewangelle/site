import { useAtom } from 'jotai';
import type { ReactNode } from 'react';
import { useAnimatedBackground } from '~/hooks/useAnimatedBackground';
import { isDownloadsSelectedAtom } from '~/store/atoms';

export function Body({ children }: { children: ReactNode }) {
  const [isDownloadsSelected, setDownloadsSelected] = useAtom(
    isDownloadsSelectedAtom,
  );
  const ref = useAnimatedBackground();
  return (
    <body
      ref={ref}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isDownloadsSelected) {
          setDownloadsSelected(false);
        }
      }}
    >
      {children}
    </body>
  );
}
