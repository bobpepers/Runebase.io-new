module.exports = require('./webpack.config.js')({
  isProduction: false,
  disableHostCheck: true,
  devtool: 'cheap-eval-source-map',
  jsFileName: 'app.js',
  cssFileName: 'app.css',
  port: 3002,
});
