var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: __dirname + '/common-ui',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8081, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://0.0.0.0:8081/');
});
