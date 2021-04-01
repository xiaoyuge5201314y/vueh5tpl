module.exports = {
    configureWebpack: {
      resolve: {
        //配置别名
        alias: {
          '@com': '@/componnets',
          '@views': '@/views',
          '@utils': '@/utils',
          '@config': '@/config',
          '@api': '@/api',
          '@image': '@/assets/image',
          '@style': '@/assets/style',
          '@font': '@/assets/font',
        }
      }
    }
  }