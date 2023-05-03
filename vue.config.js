const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/sitdownpls/',

  transpileDependencies: true,

  pwa: {
    themeColor: '#00CBFF'
  },
})
