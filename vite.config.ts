// Vite config for 3Novator Tech - Updated for Vercel deployment
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      publicDir: 'public',
      base: mode === 'production' ? '/' : '/',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        }
      },
      build: {
        assetsDir: 'assets',
        copyPublicDir: true,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              motion: ['framer-motion'],
              icons: ['lucide-react']
            }
          }
        },
        // Ensure video files are handled correctly
        assetsInlineLimit: 0,
      },
    };
});
