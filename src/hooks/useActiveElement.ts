import { useSyncExternalStore } from 'react';

export function useActiveElement(): Element | null {
  function getSnapshot(): Element | null {
    return document.activeElement;
  }

  function subscribe(callback: (element: Element | null) => void): () => void {
    const timer = setInterval(callback, 250);
    return () => {
      clearInterval(timer);
    };
  }

  function getServerSnapshot(): null {
    return null;
  }

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
