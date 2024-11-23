import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        about: 'about.html',
        traditional: 'traditional-models.html',
        smartwater: 'smartwater-models.html',
        structure: 'structure-models.html',
      }
    }
  }
})
