// const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  // output: {
  //   path: path.join(__dirname, 'dist'),
  //   filename: 'bundle.js'
  // },
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      include: /src/,
      use: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.scss$|\.css$/,
      use: [
        'style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader', // compiles Sass to CSS
      ],
    },
    {
      test: /\.html$/,
      loader: 'html-loader?attrs[]=video:src',

    },
    {
      test: /\.mov$/,
      loader: 'url-loader?limit=100000mimetype=video/mov',
    },
    {
      test: /\.png$/,
      loader: 'url-loader?limit=100000',
    },
    {
      test: /\.jpg$/,
      loader: 'file-loader',
    },
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream',
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
    },
    ],
  },
  plugins: [htmlPlugin],
  // devServer: {
  //   contentBase: path.join(__dirname, 'public')
  // }
};
