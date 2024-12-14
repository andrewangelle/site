import type { RefObject } from 'react';
import {
  FaEnvelopeSquare,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { strings } from '~/utils/constants';

export function MobileLinks({
  ref,
}: {
  ref: RefObject<HTMLAnchorElement | null>;
}) {
  return (
    <div className="links">
      <div className="mobile-link">
        <h3 role="presentation">{strings.github}</h3>

        <a
          ref={ref}
          aria-label={strings.aria.github}
          href={strings.hrefs.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub role="presentation" size={60} />
        </a>
      </div>

      <div className="mobile-link">
        <h3 role="presentation">{strings.linkedin}</h3>

        <a
          aria-label={strings.aria.linkedin}
          href={strings.hrefs.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin role="presentation" size={60} />
        </a>
      </div>

      <div className="mobile-link">
        <h3 role="presentation">{strings.contact}</h3>

        <a
          aria-label={strings.aria.contact}
          href={strings.hrefs.contact}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelopeSquare role="presentation" size={60} />
        </a>
      </div>

      <div className="mobile-link">
        <h3 role="presentation">{strings.resume}</h3>

        <button
          aria-label={strings.aria.resume}
          type="button"
          onClick={() => window?.location.assign('/api/resume')}
        >
          <FaFilePdf role="presentation" size={56} />
        </button>
      </div>
    </div>
  );
}
