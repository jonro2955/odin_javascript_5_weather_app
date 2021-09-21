const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // Webpack output splitting
    City: './src/class/City.js',
    API: './src/modules/API.js',
    Storage: './src/modules/Storage.js',
    UI: './src/modules/UI.js',
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  output: {
    // Webpack output splitting
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: false,
  watchOptions: {
    aggregateTimeout: 600,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
