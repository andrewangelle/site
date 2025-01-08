import { defineConfig } from '@tanstack/start/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    preset: 'node-server',
    experimental: {
      websocket: true
    }
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
}).addRouter({
  name: "websocket",
  type: "http",
  handler: "./app/ws.ts", // the file we created above
  target: "server",
  base: "/_ws",
}).addRouter(		{
  name: "party",
  type: "http",
  handler: "./app/party.ts",
  target: "server",
  base: "/party",
})