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

    // Add event listeners for focusin and focusout
    document.addEventListener('focusin', handleFocusChange);
    document.addEventListener('focusout', handleFocusChange);

    return () => {
      // Cleanup event listeners
      document.removeEventListener('focusin', handleFocusChange);
      document.removeEventListener('focusout', handleFocusChange);
    };
  }, [ref]);

  return isFocusWithin;
}
