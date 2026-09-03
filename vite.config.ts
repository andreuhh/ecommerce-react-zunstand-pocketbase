import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    //alias: {
    // '@/shared': path.resolve(__dirname, 'src/shared'),
    // '@/model': path.resolve(__dirname, 'src/model'),
    // '@/services': path.resolve(__dirname, 'src/services'),
    //},
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})