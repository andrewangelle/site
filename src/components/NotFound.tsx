import * as Sentry from '@sentry/tanstackstart-react';
import {
  Link,
  type NotFoundRouteProps,
  useNavigate,
} from '@tanstack/react-router';
import { useEffect } from 'react';
import { strings } from '~/utils/constants';

export function NotFound(props: NotFoundRouteProps) {
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
            className="title not-found"
            to="/"
            onKeyDown={(e) => {
              if (e.key === ' ') {
                navigate({ to: '/' });
              }
            }}
          >
            <h1>{strings.notFound}</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
