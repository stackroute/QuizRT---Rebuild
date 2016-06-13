var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8082',
    'webpack/hot/only-dev-server',
    './common-ui/app.jsx'
  ],
  output: {
    path: path.join(__dirname, 'common-ui', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'common-ui')
    }]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  }
};
