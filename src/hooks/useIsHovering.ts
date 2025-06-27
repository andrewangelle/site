import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export function useIsHovering<ElementType extends HTMLElement>(
  ref: RefObject<ElementType | null>,
): boolean {
  const [isFocusWithin, setIsFocusWithin] = useState(false);

  useEffect(() => {
    const on = () => setIsFocusWithin(true);
    const off = () => setIsFocusWithin(false);

    // Add event listeners for focusin and focusout
    ref.current?.addEventListener('mouseenter', on);
    ref.current?.addEventListener('mouseleave', off);

    return () => {
      // Cleanup event listeners
      ref.current?.removeEventListener('mouseenter', on);
      ref.current?.removeEventListener('mouseleave', off);
    };
  }, [ref]);

  return isFocusWithin;
}
