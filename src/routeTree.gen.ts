/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as ResumeRouteImport } from './routes/resume'
import { Route as IndexRouteImport } from './routes/index'

const ResumeRoute = ResumeRouteImport.update({
  id: '/resume',
  path: '/resume',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/resume': typeof ResumeRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/resume': typeof ResumeRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/resume': typeof ResumeRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/resume'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/resume'
  id: '__root__' | '/' | '/resume'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ResumeRoute: typeof ResumeRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/resume': {
      id: '/resume'
      path: '/resume'
      fullPath: '/resume'
      preLoaderRoute: typeof ResumeRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ResumeRoute: ResumeRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
