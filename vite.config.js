import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/work-space-craft-dot-com/',
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173
  }
})