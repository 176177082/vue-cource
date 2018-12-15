// 保存前是否检测lint语法
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? 'iview-admin' : '/'
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false
  // devServer: {
  //   proxy: 'http://localhost:4000'
  // }
}
