var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./src/index.js",

  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'src')
        ],
        loaders: [ 'react-hot', 'babel' ]
      }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  }
}
