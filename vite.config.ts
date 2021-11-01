import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import config from './package.json'

const resolve = path.resolve

const banner = `/*!
  * ${config.name} v${config.version} ${new Date()}
  * (c) 2021 @idonteatcookie.
  * Released under the MIT License.
  */`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
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
    lib: {
      // 构建为库 https://vitejs.cn/guide/build.html#%E5%BA%93%E6%A8%A1%E5%BC%8F
      entry: path.resolve(__dirname, 'src/packages/index.ts'),
      name: 'cookie',
      fileName: 'cookie',
      formats: ['es', 'umd'] // 为发行该库提供两种构建格式：es 和 umd
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
