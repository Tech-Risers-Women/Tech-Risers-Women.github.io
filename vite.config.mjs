import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// base must be absolute ('/') because pages are pre-rendered to their own
// files (e.g. /about), so relative asset paths would break on nested URLs.
export default defineConfig({
  plugins: [react()],
  base: '/',
  // react-icons v4's ESM build can't be imported directly by Node, so bundle
  // it into the pre-render build (scripts/prerender.mjs).
  ssr: { noExternal: ['react-icons'] },
});
