import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  // Allow the Ona exposed-port host to reach the dev server. Only affects
  // `vite dev` (not the production build); the port is private to the creator.
  server: { allowedHosts: true },
  plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact()],
})

export default config
