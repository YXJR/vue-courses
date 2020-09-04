const path = require('path')

module.exports = {
  //配置静态资源路径.因为1个服务器上有多个项目需要区分
  publicPath: process.env.NODE_ENV === 'production' ? '/cart/' : '/',
  chainWebpack: (config) => {
    //配置自动化导入样式,在程序启动之初就自动加载scss样式文件(颜色,变量,mixin)
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach((type) =>
      addStyleResource(config.module.rule('scss').oneOf(type))
    )
  },
  devServer: {
    // before(app) {
    //   app.get('/api/courses', (req, res) => {
    //     res.json([
    //       { name: 'web全栈', price: 1299 },
    //       { name: 'web高级', price: 3099 },
    //     ])
    //   })
    // },
    proxy: 'http://localhost:3000',
  },
}

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/imports.scss')],
    })
}
