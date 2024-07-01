import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: '/docs/index.html',
    proxy:{
      '/api':'https://localhost:7000'
    }
  },
  plugins: [react()],
})
