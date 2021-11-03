const fs = require('fs')
const path = require('path')

/*
 * 复制文件
 * @param src {String} 要复制的文件
 * @param dist {String} 复制到目标目录
 */
function copyFile(src, dist, name) {
  fs.access(dist, function (err) {
    if (err) {
      // 目录不存在时创建目录
      fs.mkdirSync(dist)
    }
    fs.writeFileSync(dist + '/' + name, fs.readFileSync(src + '/' + name))
  })
}

const files = ['component', 'cookie', 'index']
const folders = ['button']

files.forEach((f) => {
  const src = path.resolve(__dirname, './src/types')
  const dist = path.resolve(__dirname, './dist')
  copyFile(src, dist, f + '.d.ts')
})

folders.forEach((f) => {
  const src = path.resolve(__dirname, './src/types/packages/' + folders)
  const dist = path.resolve(__dirname, './dist/packages/' + f)
  copyFile(src, dist, 'index.d.ts')
})
