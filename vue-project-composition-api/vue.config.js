const { defineConfig } = require('@vue/cli-service')
const target = 'https://0000.mock.pstmn.io'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      }
    }
  }
})
