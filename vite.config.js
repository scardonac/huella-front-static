import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite.js
export default defineConfig({
  plugins: [react()],
  base: '/huella-carbono-front/'  // Asegúrate de que esta ruta refleje la ubicación de tu aplicación en el servidor
})