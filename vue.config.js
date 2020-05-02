module.exports = {
  configureWebpack: {
    // 配置与路径相关的东西 解决路径相关问题 resolve
    resolve: {
      alias: {
        // 默认'@': 'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}