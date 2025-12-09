import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useAnimatedSize } from '~/hooks/useAnimatedSize';

type AnimatedIconProps = {
  isFocused: boolean;
  isHovering: boolean;
  children: ReactNode;
};

export function AnimatedIcon({
  isFocused,
  isHovering,
  children,
}: AnimatedIconProps) {
  const ref = useAnimatedSize(isFocused || isHovering);

  return (
    <motion.div ref={ref}>
      <div>{children}</div>
    </motion.div>
  );
}
