import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      // Relative asset paths so the build works both at the GitHub Pages
      // project URL (glelis.github.io/lelisconsulting/) and at the custom
      // domain root (lelisconsulting.com). Hash routing keeps the document
      // path fixed, so relative paths resolve correctly on every route.
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
