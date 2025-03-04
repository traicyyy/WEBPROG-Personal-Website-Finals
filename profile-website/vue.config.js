const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    allowedHosts: "all",
    client: {
      webSocketURL: 'wss://your-dev-url:8080/ws'
    }
  }
};
