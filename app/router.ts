// app/router.tsx
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

import './styles/index.css'


export type RenderRoutePathParams = {
  type: string; 
  version: string; 
  token: string;
};


export function createRouter() {
  const router = createTanStackRouter({
    routeTree
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}