import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export function useIsHovering<ElementType extends HTMLElement>(
  ref: RefObject<ElementType | null>,
): boolean {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const on = () => setIsHovering(true);
    const off = () => setIsHovering(false);

    ref.current?.addEventListener('mouseenter', on);
    ref.current?.addEventListener('mouseleave', off);

    return () => {
      ref.current?.removeEventListener('mouseenter', on);
      ref.current?.removeEventListener('mouseleave', off);
    };
  }, [ref]);

  return isHovering;
}
