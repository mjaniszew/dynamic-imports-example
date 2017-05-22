const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

const commonConfig = {
  context: __dirname + "/src",
  entry: {
    app: './index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].async.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      template: './index.html',
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.html'
    }),
  ],
};

if (env === 'development') {
    module.exports = merge(commonConfig, {
      devtool: 'source-map',
      devServer: {
        contentBase: './src',
        publicPath: '/',
        historyApiFallback: true,
        port: 3000
      },      
    });
}

if (env === 'production') {
    module.exports = merge(commonConfig, {});
}