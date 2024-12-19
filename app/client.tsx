import { StartClient } from '@tanstack/start';
import { hydrateRoot } from 'react-dom/client';
import { createRouter } from '~/router';

const router = createRouter();

if (router) {
  hydrateRoot(document, <StartClient router={router} />);
}

export default router;
