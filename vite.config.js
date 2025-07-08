import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Simple_Todo/', // This is VERY IMPORTANT and must match your repo name exactly
})
