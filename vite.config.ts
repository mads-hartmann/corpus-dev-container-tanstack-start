import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  // Allow Ona forwarded-port hosts in development so the dev server is
  // reachable through the runner domain (e.g. <port>--<env-id>.<runner-domain>).
  server: {
    allowedHosts: ['.flex.doptig.cloud'],
  },
  plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact()],
})

export default config
