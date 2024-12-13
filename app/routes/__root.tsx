import type { ReactNode } from 'react'
import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import {  Meta, Scripts } from '@tanstack/start'
import { Provider } from 'jotai'
import { Body } from '~/components/Body';
import { DevTools } from '~/components/DevTools';
import appCss from '~/styles/index.css?url'

export const Route = createRootRoute({
  head: () => ({
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
        link: '/favicon.ico'
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" }
    ]
  }),
  component: Root,
})


function Root(){
  return (
    <RootDocument>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <DevTools />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <Provider>
        <Body>
          {children}
        </Body>
      </Provider>
    </html>
  )
}
