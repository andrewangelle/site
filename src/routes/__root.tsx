import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import { Provider } from 'jotai/react';
import type { ReactNode } from 'react';
import { Body } from '~/components/Body';
import { DevTools } from '~/components/DevTools';
import indexCss from '~/styles/index.css?url';
import linksSectionCss from '~/styles/links-container.css?url';
import nameSectionCss from '~/styles/name-container.css?url';

export const Route = createRootRoute({
  head: getDocumentHead,
  component: Root,
});

function Root() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <Provider>
        <Body>
          {children}
          <Scripts />
          <DevTools />
        </Body>
      </Provider>
    </html>
  );
}

function getDocumentHead() {
  return {
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Andrew Angelle',
      },
      {
        rel: 'icon',
        link: '/favicon.ico',
      },
    ],
    links: [
      { rel: 'stylesheet', href: indexCss },
      { rel: 'stylesheet', href: nameSectionCss },
      { rel: 'stylesheet', href: linksSectionCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
      },
    ],
  };
}
