import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const gitHubPagesBasePath = process.env.PAGES_BASE_PATH;
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  ...(gitHubPagesBasePath ? { basePath: gitHubPagesBasePath } : {}),
  server: {
    open: true,
    port: 3000,
  },
});
