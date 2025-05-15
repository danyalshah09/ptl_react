import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";  // Import Tailwind CSS
import autoprefixer from "autoprefixer";  // Import Autoprefixer
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],  // Use Tailwind CSS and Autoprefixer
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'public/assets'),
    },
  },
  publicDir: 'public',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@headlessui/react', '@heroicons/react', '@material-tailwind/react'],
        },
        // Optimize chunk loading order for FCP
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
          return `assets/${fileName}-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|webp|svg)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging
    sourcemap: false,
    // Optimize CSS output
    cssCodeSplit: true,
    // Enable aggressive asset optimization
    assetsInlineLimit: 4096,
  },
  // Enable HTTP/2 push hints for preloading
  server: {
    fs: {
      strict: true,
    },
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Experimental features for faster builds
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});