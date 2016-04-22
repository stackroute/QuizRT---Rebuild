module.exports = {
  entry: __dirname + '/common-ui/app.jsx',
  output: {
    filename: __dirname + '/common-ui/bundle.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'jsx-loader?insertPragma=React.DOM&harmony'
    }]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['','.js','.jsx']
  }
}