import { useAtomValue } from 'jotai/react';
import { motion } from 'motion/react';
import { activeTextAtom } from '~/store/atoms';
import { useActiveTextRef } from '~/utils/useActiveTextRef';

export function ActiveText() {
  const ref = useActiveTextRef();
  const activeText = useAtomValue(activeTextAtom);

  return (
    <motion.h3 ref={ref} initial={{ opacity: 0 }}>
      {activeText}
    </motion.h3>
  );
}
