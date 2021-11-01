const fs = require('fs')
const path = require('path')

/*
 * 复制目录
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 * @params callback {Funtion} 错误处理函数
 */
function copyDir(src, dist, callback) {
  fs.access(dist, function (err) {
    if (err) {
      // 目录不存在时创建目录
      fs.mkdirSync(dist)
    }
    _copy(null, src, dist)
  })

  function _copy(err, src, dist) {
    if (err) {
      callback(err)
    } else {
      fs.readdir(src, function (err, paths) {
        if (err) {
          callback(err)
        } else {
          paths.forEach(function (path) {
            const _src = src + '/' + path
            const _dist = dist + '/' + path
            fs.stat(_src, function (err, stat) {
              if (err) {
                callback(err)
              } else {
                // 判断是文件还是目录
                if (stat.isFile()) {
                  fs.writeFileSync(_dist, fs.readFileSync(_src))
                } else if (stat.isDirectory()) {
                  // 当是目录是，递归复制
                  copyDir(_src, _dist, callback)
                }
              }
            })
          })
        }
      })
    }
  }
}

// 把types文件夹复制到dist目录
const src = path.resolve(__dirname, './src/types')
const dist = path.resolve(__dirname, './dist')
copyDir(src, dist, function (err) {
  if (err) {
    console.log(err)
  }
})
