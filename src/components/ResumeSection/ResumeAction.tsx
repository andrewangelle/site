import { PDFDownloadLink } from '@react-pdf/renderer';
import { useNavigate } from '@tanstack/react-router';
import { useSetAtom } from 'jotai/react';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { BsDownload, BsFiletypePdf } from 'react-icons/bs';
import { ActiveUnderline } from '~/components/LinksSection/ActiveUnderline';
import { AnimatedIcon } from '~/components/ResumeSection/AnimatedIcon';
import { useIsFocusWithin } from '~/hooks/useIsFocusWithin';
import { useIsHovering } from '~/hooks/useIsHovering';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { ResumePDF } from '~/PDF/ResumePDF';
import { activeLinkAtom } from '~/store/atoms';
import {
  activeLinkConfig,
  enterExitAnimationProps,
  strings,
} from '~/utils/constants';

export type ResumeActionLinkProps = { action: 'view' | 'download' };

export function ResumeAction({ action }: ResumeActionLinkProps) {
  const containerRef = useRef(null);
  const isFocusWithin = useIsFocusWithin(containerRef);
  const isHovering = useIsHovering(containerRef);
  const isActive = isFocusWithin || isHovering;
  const setActiveLink = useSetAtom(activeLinkAtom);
  const navigate = useNavigate();

  function navigateToViewResume() {
    navigate({ to: '/resume' });
  }

  if (action === 'download') {
    return (
      <motion.div ref={containerRef} {...enterExitAnimationProps}>
        <motion.div
          tabIndex={-1}
          aria-label={strings.aria.resume[action]}
          whileHover={activeLinkConfig}
          onHoverStart={() => setActiveLink(strings[action])}
          onHoverEnd={() => setActiveLink(null)}
          style={{ position: 'relative' }}
        >
          <PDFDownloadLink
            className="pdf-link"
            document={<ResumePDF />}
            fileName={PDF_CONSTANTS.DOC_TITLE}
            aria-label={strings.aria.resume.download}
            style={isFocusWithin ? { marginBottom: 3 } : {}}
            onFocus={() => setActiveLink(strings[action])}
          >
            {isMobile && (
              <h3 style={{ color: isActive ? 'skyblue' : 'white' }}>
                {strings[action]}
              </h3>
            )}
            <AnimatedIcon isFocused={isFocusWithin} isHovering={false}>
              <BsDownload role="presentation" className="doc-link" size={60} />
              <ActiveUnderline isActive={isActive} />
            </AnimatedIcon>
          </PDFDownloadLink>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div ref={containerRef} {...enterExitAnimationProps}>
      <motion.button
        aria-label={strings.aria.resume[action]}
        style={{ paddingBottom: 3 }}
        whileFocus={activeLinkConfig}
        whileHover={activeLinkConfig}
        onHoverStart={() => setActiveLink(strings[action])}
        onHoverEnd={() => setActiveLink(null)}
        onFocus={() => setActiveLink(strings[action])}
        onBlur={() => setActiveLink(null)}
        onClick={navigateToViewResume}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            navigateToViewResume();
          }
        }}
      >
        {isMobile && (
          <h3 style={{ color: isActive ? 'skyblue' : 'white', opacity: 1 }}>
            {strings[action]}
          </h3>
        )}
        <BsFiletypePdf role="presentation" className="doc-link" size={60} />
        <ActiveUnderline isActive={isActive} />
      </motion.button>
    </motion.div>
  );
}
