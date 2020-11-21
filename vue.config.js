module.exports = {
  configureWebpack(config) {
    config.devtool = 'cheap-module-source-map'
    config.resolve.alias = {
      vue$: 'vue/dist/vue.esm.js'
    }
    config.resolve.extensions = ['.vue', '.js', '.jsx', '.json']
    config.devServer = {
      proxy: {
        '^/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
}