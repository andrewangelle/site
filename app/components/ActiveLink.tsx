import { useAtomValue } from 'jotai/react';
import { motion } from 'motion/react';
import { useAnimatedActiveLink } from '~/hooks/useAnimatedActiveLink';
import { activeLinkAtom } from '~/store/atoms';

export function ActiveLink() {
  const ref = useAnimatedActiveLink();
  const activeLink = useAtomValue(activeLinkAtom);

  return (
    <motion.h3 ref={ref} initial={{ opacity: 0 }}>
      {activeLink}
    </motion.h3>
  );
}
