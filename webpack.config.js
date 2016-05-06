var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: __dirname + '/common-ui/app.jsx',
  output: {
    filename: __dirname + '/common-ui/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
<<<<<<< HEAD

        exclude: /(node_modules|bower_components)/

=======
        exclude: /(node_modules|bower_components)/
>>>>>>> 462e3e3d5a2dd3d6b6a34200406b0c8784112e37
      }
    ]
  },
  externals: {
    "React": "React"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
 /*new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),*/
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}})
  ],
  resolve: {
    extensions: ['','.js','.jsx']
  }
}
