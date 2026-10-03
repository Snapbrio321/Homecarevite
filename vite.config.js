import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Vercel deployment — no base path needed (served from root)
  base: '/',

  build: {
    // Improve chunk splitting for better caching & Core Web Vitals
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor: React core
          'react-vendor': ['react', 'react-dom'],
          // Icons — split from main bundle
          'icons': ['react-icons/fi', 'react-icons/md', 'react-icons/pi'],
        },
      },
    },
    // Generate source maps for debugging in production
    sourcemap: false,
    // Minify for smaller bundle
    minify: 'esbuild',
    // Inline small assets (< 4kb) to reduce requests
    assetsInlineLimit: 4096,
    // Chunk size warning threshold
    chunkSizeWarningLimit: 600,
  },

  // Performance: pre-bundle deps
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-icons/fi', 'react-icons/md', 'react-icons/pi'],
  },
})
