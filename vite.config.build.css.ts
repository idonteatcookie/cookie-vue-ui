import { defineConfig } from 'vite'
import path from 'path'

const resolve = path.resolve

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
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
