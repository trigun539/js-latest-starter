var path              = require('path');
var join              = path.join;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules', './src']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: 'eval-source-map'
};
