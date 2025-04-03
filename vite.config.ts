import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Landing-asistencias-unidad/', // 👈 nombre exacto del repositorio
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'docs', // 👈 genera la carpeta docs para GitHub Pages
  },
})
