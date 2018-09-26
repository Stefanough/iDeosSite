const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/'],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'client/dist/'),
    hot: true,
    historyApiFallback: true,
  },
  plugins: [htmlPlugin],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.scss',
    ],
  },
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
      test: /\.webm$/,
      loader: 'url-loader?limit=100000mimetype=video/webm',
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
};
