import { ErrorComponent, Link, useNavigate } from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';
import { strings } from '~/utils/constants';

export function AppError({ error }: ErrorComponentProps) {
  const navigate = useNavigate();
  return (
    <div className="section">
      <ErrorComponent error={error} />

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
            <h1>{strings.errorBoundary}</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
