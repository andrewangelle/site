import type { ReactNode } from 'react';
import { useAnimatedBackground } from '~/utils/useAnimatedBackground';

export function Body({ children }: { children: ReactNode }) {
  const ref = useAnimatedBackground();
  return <body ref={ref}>{children}</body>;
}
