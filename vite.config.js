import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Universal relative path for both Electron and GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
