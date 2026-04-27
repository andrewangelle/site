import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import viteReact from '@vitejs/plugin-react'
import netlify from '@netlify/vite-plugin-tanstack-start';
import { sentryTanstackStart } from "@sentry/tanstackstart-react/vite";
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart(),
    netlify(),
    viteReact(),
    sentryTanstackStart({
      org: "andrewangelle",
      project: "site",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
})