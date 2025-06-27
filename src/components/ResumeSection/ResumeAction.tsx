import { motion } from 'motion/react';
import { useRef } from 'react';
import { ViewOrDownload } from '~/components/ResumeSection/ViewOrDownload';
import { useIsFocusWithin } from '~/hooks/useIsFocusWithin';
import { useIsHovering } from '~/hooks/useIsHovering';
import { enterExitAnimationProps } from '~/utils/constants';
import { strings } from '~/utils/constants';

export type ResumeActionLinkProps = { action: 'view' | 'download' };

export function ResumeAction({ action }: ResumeActionLinkProps) {
  const containerRef = useRef(null);
  const isFocusWithin = useIsFocusWithin(containerRef);
  const isHovering = useIsHovering(containerRef);

  const isActive = isHovering || isFocusWithin;

  return (
    <motion.div ref={containerRef} {...enterExitAnimationProps}>
      <ViewOrDownload
        action={action}
        isFocused={isFocusWithin}
        isHovering={isHovering}
      >
        <h3 style={{ color: isActive ? 'skyblue' : 'white' }}>
          {strings[action]}
        </h3>
      </ViewOrDownload>
    </motion.div>
  );
}
