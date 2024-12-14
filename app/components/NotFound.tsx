import { Link, useNavigate } from '@tanstack/react-router';
import { strings } from '~/utils/constants';

export function NotFound() {
  const navigate = useNavigate();
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
