import { motion } from 'motion/react';
import type { CSSProperties, ReactNode } from 'react';
import type { ResumeActionLinkProps } from '~/components/ResumeSection/ResumeAction';
import { useAnimatedSize } from '~/hooks/useAnimatedSize';

type AnimatedIconProps = Omit<ResumeActionLinkProps, 'action'> & {
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

  const outlineStyles: CSSProperties = isFocused
    ? {
        outline: 'solid #0057B7',
        borderRadius: 8,
        outlineWidth: 2,
      }
    : {};

  const innerOutlineStyles: CSSProperties = isFocused
    ? {
        outline: 'solid white',
        borderRadius: 8,
        outlineOffset: 1.5,
        outlineWidth: 1.65,
      }
    : {};

  return (
    <motion.div ref={ref} style={outlineStyles}>
      <div style={innerOutlineStyles}>{children}</div>
    </motion.div>
  );
}
