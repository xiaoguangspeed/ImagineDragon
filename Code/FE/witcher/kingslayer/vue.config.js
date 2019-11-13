const prerenderSpaPlugin = require('prerender-spa-plugin')
const renderer = prerenderSpaPlugin.PuppeteerRenderer;
const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development' ? false: false,
  devServer: {

  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      // 为开发环境修改配置...
    } else {
      // 为生产环境修改配置...
      return {
        plugins: [
          new prerenderSpaPlugin({
            staticDir: path.join(__dirname, 'dist'),
            outputDir: path.join(__dirname, 'prerendered'),
            routes: [ '/','/about'],
            renderer: new renderer({
              headless: false,
              // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
              // renderAfterDocumentEvent: 'render-event'
            })
          })
        ]
      }
    }
  
  },
  chainWebpack(config) {

  }
}