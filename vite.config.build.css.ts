import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: './src/styles/index.scss',
      formats: ['es'],
      fileName: 'style'
    },
    emptyOutDir: false
  }
})
