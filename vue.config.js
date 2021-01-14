const configureAPI = require('./server/configure')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/_variables.scss";`
      }
    }
  },
  devServer: {
    before: configureAPI,
    proxy: 'http://localhost:3000'
  }
}
