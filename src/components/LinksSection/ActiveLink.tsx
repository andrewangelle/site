import { useAtomValue } from 'jotai/react';
import { motion } from 'motion/react';
import { useAnimatedVisibility } from '~/hooks/useAnimatedVisibility';
import { activeLinkAtom } from '~/store/atoms';

export function ActiveLink() {
  const activeLink = useAtomValue(activeLinkAtom);
  const ref = useAnimatedVisibility(activeLinkAtom);
  return <motion.h3 ref={ref}>{activeLink}</motion.h3>;
}
