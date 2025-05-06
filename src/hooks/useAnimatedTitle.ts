import { useScroll, useTransform } from 'motion/react';

export function useAnimatedTitle() {
  const { scrollYProgress } = useScroll();
  const moveLeft = useTransform(scrollYProgress, getLeftOffset);
  const moveRight = useTransform(scrollYProgress, getRightOffset);
  const linksOpacity = useTransform(scrollYProgress, (latest) => latest);

  function getLeftOffset(value: number) {
    const result = Math.ceil(value * 1000);
    const offset = result < 1000 ? result : 1000;
    return `${Math.abs(result + offset) * -1}px`;
  }

  function getRightOffset(value: number) {
    return `${Math.ceil(value * 1000)}px`;
  }

  return {
    moveLeft,
    moveRight,
    linksOpacity,
  };
}
