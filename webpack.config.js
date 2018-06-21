const webpack = require('webpack');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = validate({
  entry: {
    index: __dirname + '/src/index.jsx'
  },
  devtool: 'source-map',
  output: {
    path: "docs",
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /learning-library/,
        loader: path.resolve('loaders/library')
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin("WebLearner"),
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      title: "Web Learner",
      chunks: ['index']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      _: "lodash"
    })

  ],
  //node: {fs: 'empty'},
  devServer: {
    contentBase: 'build',
    //historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000
  }
});
