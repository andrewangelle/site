import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export function useIsFocusWithin<ElementType extends HTMLElement>(
  ref: RefObject<ElementType | null>,
): boolean {
  const [isFocusWithin, setIsFocusWithin] = useState(false);

  useEffect(() => {
    const handleFocusChange = () => {
      if (ref.current) {
        const activeElement = document.activeElement;
        const isWithin = ref.current.contains(activeElement);
        setIsFocusWithin(isWithin);
      }
    };

    // Check focus on mount
    handleFocusChange();

    globalThis.document.addEventListener('focusin', handleFocusChange);
    globalThis.document.addEventListener('focusout', handleFocusChange);

    return () => {
      globalThis.document.removeEventListener('focusin', handleFocusChange);
      globalThis.document.removeEventListener('focusout', handleFocusChange);
    };
  }, [ref]);

  return isFocusWithin;
}
