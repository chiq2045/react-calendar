const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

const mode = process.env.NODE_ENV;
const devMode = mode === 'development';

const plugins = [
  new HtmlWebpackPlugin({
    template: resolve(__dirname, 'src', 'index.html')
  }),
  new MiniCssExtractPlugin({
    filename: devMode ? '[id].css' : '[id].[contenthash].css'
  })
];

module.exports = {
  mode,
  entry: resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: devMode ? '[name].bundle.js' : '[name].[contenthash].js',
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.css'
    ]
  },
  devServer: {
    publicPath: '/',
    port: 9000,
    historyApiFallback: true,
    hot: true
  },
  devtool: 'source-map',
  plugins
};
