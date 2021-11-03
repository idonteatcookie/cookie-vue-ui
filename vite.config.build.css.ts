import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: './src/styles/index.css',
      formats: ['es'],
      fileName: 'style'
    },
    emptyOutDir: false
  }
})
