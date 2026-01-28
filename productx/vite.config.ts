import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy libraries into separate chunks
          'three': ['three'],
          'mui': ['@mui/material', '@mui/icons-material'],
          'framer': ['framer-motion'],
        }
      }
    }
  }
})
