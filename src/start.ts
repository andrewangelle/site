import {
  sentryGlobalFunctionMiddleware,
  sentryGlobalRequestMiddleware,
} from '@sentry/tanstackstart-react';
import { createStart } from '@tanstack/react-start';
import { pageViewsMiddleware } from '~/services/pageViews';

export const startInstance = createStart(() => ({
  requestMiddleware: [sentryGlobalRequestMiddleware],
  functionMiddleware: [sentryGlobalFunctionMiddleware, pageViewsMiddleware],
}));
