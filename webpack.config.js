module.exports = {
  entry: __dirname + '/common-ui/app.jsx',
  output: {
    filename: __dirname + '/common-ui/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['','.js','.jsx'],
    modulesDirectory: [__dirname + '/node_modules']
  }
}
