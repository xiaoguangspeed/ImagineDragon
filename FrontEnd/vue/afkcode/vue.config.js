// vue.config.js
module.exports = {
    // 选项...
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
    outputDir:'dist',
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        sass: {
          // @/ 是 src/ 的别名
          // 所以这里假设你有 `src/variables.scss` 这个文件
          data: `@import "@/assets/scss/_index.scss";`
        },
        less: {
          javascriptEnabled: true
        }
      }
    },
    devServer: {
      publicPath: '/',
      host:'0.0.0.0',
      port:'9090',
      // proxy: 'http://192.168.38.94:9201',
      proxy: 'http://192.168.181.90:9901',
      // proxy: {
      //     '*': {
      //         // target: 'http://192.168.181.169:5555',
      //         target: 'http://192.168.38.94:9201',
      //         //  target: 'http://192.168.34.80:5555',
      //         changeOrigin: true
      //     }
      // },
    },
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // 当使用只有入口的字符串格式时，
      // 模板会被推导为 `public/subpage.html`
      // 并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `subpage.html`。
      // subpage: 'src/subpage/main.js'
    }
  }