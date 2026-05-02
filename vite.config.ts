import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import netlify from '@netlify/vite-plugin-tanstack-start';
import { sentryTanstackStart } from "@sentry/tanstackstart-react/vite";
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
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