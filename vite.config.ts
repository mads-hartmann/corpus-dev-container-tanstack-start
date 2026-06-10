import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  // In Ona the dev server is reached via the runner domain, not localhost.
  // Allow forwarded hosts so Vite does not reject those requests. The port is
  // private (creator_only admission), so this only applies to the dev server.
  server: process.env.ONA_DEV ? { allowedHosts: true } : undefined,
  plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact()],
})

export default config
