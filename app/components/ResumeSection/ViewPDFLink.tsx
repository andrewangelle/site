import { useSetAtom } from 'jotai';
import { motion } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { BsFiletypePdf } from 'react-icons/bs';
import { SECTIONS, activeLinkAtom, activeViewAtom } from '~/store/atoms';
import { activeLinkConfig, strings } from '~/utils/constants';

export function ViewPDFLink() {
  const setActiveLink = useSetAtom(activeLinkAtom);
  const setActiveView = useSetAtom(activeViewAtom);

  function viewPDF() {
    window?.location.assign('/api/resume/pdf');
    setActiveView(SECTIONS.LINKS);
    setActiveLink(null);
  }

  if (isMobile) {
    return (
      <div className="mobile-link">
        <button
          type="button"
          aria-label={strings.aria.resumeView}
          onClick={viewPDF}
        >
          <BsFiletypePdf role="presentation" className="doc-link" size={60} />
        </button>
      </div>
    );
  }

  return (
    <motion.button
      aria-label={strings.aria.resumeView}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onClick={viewPDF}
    >
      <BsFiletypePdf role="presentation" className="doc-link" size={60} />
    </motion.button>
  );
}
