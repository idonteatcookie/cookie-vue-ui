import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import config from './package.json'

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021 @idonteatcookie.
* Released under the MIT License.
*/`

const input = {
  // 组件单独打包
  button: `./src/packages/button/index.ts`
}

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  plugins: [vue()],
  build: {
    minify: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    lib: {
      entry: '',
      name: 'index',
      formats: ['es']
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      input, // https://rollupjs.org/guide/en/#input
      output: {
        banner,
        dir: path.resolve(__dirname, './dist/packages'),
        entryFileNames: '[name].js'
      }
    },
    emptyOutDir: false
  }
})
