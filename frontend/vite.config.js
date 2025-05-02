import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";  // Import Tailwind CSS
import autoprefixer from "autoprefixer";  // Import Autoprefixer

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],  // Use Tailwind CSS and Autoprefixer
    },
  },
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
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});