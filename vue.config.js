const { defineConfig } = require ( '@vue/cli-service' )
module.exports = defineConfig ( {
   transpileDependencies: true,
   publicPath: process.env.NODE_ENV === 'production' ? '/vue_01/' : '/',
   devServer: {
      port: 8080,
      // open: true, // Автоматически открывать браузер при запуске сервера
      hot: true,  // Включает горячую перезагрузку
      historyApiFallback: true, // Поддержка HTML5 History API
   },
} )
