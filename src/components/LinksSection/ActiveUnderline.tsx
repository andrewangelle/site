import { motion } from 'motion/react';

export function ActiveUnderline({ isActive }: { isActive: boolean }) {
  if (isActive) {
    return (
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        style={{
          position: 'absolute',
          height: 2,
          background: 'skyblue',
          bottom: 0,
          width: '100%',
          originX: 0,
          left: 0,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    );
  }
  return null;
}
