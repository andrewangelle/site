import * as Sentry from '@sentry/tanstackstart-react';
import type { ErrorComponentProps } from '@tanstack/react-router';
import { Link, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { strings } from '~/utils/constants';

export function AppError(props: ErrorComponentProps) {
  const navigate = useNavigate();

  useEffect(() => {
    Sentry.captureException(props);
  }, [props]);

  return (
    <div className="section">
      <div className="name-container">
        <div className="inner">
          <Link
            aria-label={strings.aria.notFound}
            className="title app-error"
            to="/"
            onKeyDown={(e) => {
              if (e.key === ' ') {
                navigate({ to: '/' });
              }
            }}
          >
            <h1>{strings.errors.fallbackTitle}</h1>
            <h2>{strings.errors.fallbackSubtitle}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
