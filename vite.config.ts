import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

const resolve = path.resolve

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        })
      ]
    }
  },
  build: {
    minify: false,
    terserOptions: {
      compress: {
        // 删除console
        drop_console: true,
        drop_debugger: true
      }
    },
    outDir: 'dist-demo',
    emptyOutDir: true
  },
  base: '/cookie-vue-ui/'
})
