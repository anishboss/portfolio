import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// const gitHubPagesBasePath = import.meta.env.VITE_PAGES_BASE_PATH;
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: gitHubPagesBasePath ? gitHubPagesBasePath : '/',
  base: '/portfolio/',
  server: {
    open: true,
    port: 3000,
  },
});
