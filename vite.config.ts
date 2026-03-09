import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path must match your GitHub repo name exactly
export default defineConfig({
  plugins: [react()],
  base: '/applied-ai-roadmap/',
})
