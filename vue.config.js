const configureAPI = require('./server/configure')

module.exports = {
  devServer: {
    before: configureAPI,
    proxy: 'http://localhost:3000'
  }
}
