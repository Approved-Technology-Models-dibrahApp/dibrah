import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ command, isPreview }) => ({
  // GitHub Pages stays at /dibrah/. Firebase Hosting uses the domain root.
  base: process.env.HOSTING === 'firebase' ? '/' : command === 'build' || isPreview ? '/dibrah/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
}))
