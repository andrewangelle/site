import {  ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import {  Meta, Scripts } from '@tanstack/start'
import * as React from 'react'
import { Page } from '../components/Page'
import '../styles/index.css'

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
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" }
    ]
  }),
  component: RootDocument,
})


function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <Page>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Page>
    </html>
  )
}
