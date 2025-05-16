import { motion, view } from 'motion/react';
import { isMobile } from 'react-device-detect';
import { BsDownload, BsFiletypePdf } from 'react-icons/bs';
import type { ResumeActionLinkProps } from '~/components/ResumeSection/ResumeAction';
import { activeLinkConfig, strings } from '~/utils/constants';

type ViewOrDownloadProps = ResumeActionLinkProps & {
  onClick: () => void;
};

export function ViewOrDownload({ action, onClick }: ViewOrDownloadProps) {
  if (isMobile) {
    return (
      <div className="mobile-link">
        <button
          type="button"
          aria-label={strings.aria.resume[action]}
          onClick={onClick}
        >
          {action === 'download' ? (
            <BsDownload role="presentation" className="doc-link" size={60} />
          ) : (
            <BsFiletypePdf role="presentation" className="doc-link" size={60} />
          )}
        </button>
      </div>
    );
  }

  return (
    <motion.button
      aria-label={strings.aria.resume[action]}
      whileFocus={activeLinkConfig}
      whileHover={activeLinkConfig}
      onClick={onClick}
    >
      {action === 'download' ? (
        <BsDownload role="presentation" className="doc-link" size={60} />
      ) : (
        <BsFiletypePdf role="presentation" className="doc-link" size={60} />
      )}
    </motion.button>
  );
}
