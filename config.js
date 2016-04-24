// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'src',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    port: 9090,
    proxyTable: {

    }
  }
}
