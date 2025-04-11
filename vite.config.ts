import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Landing-asistencias-unidad/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', 
  },
}));
