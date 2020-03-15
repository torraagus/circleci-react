const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
    },
    devServer: {
       port: 8080
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader', //Nos permite agregar @babel/core y @babel/preset-react
            options: {
              presets: ['@babel/preset-react'] //Nos permite utilizar JSX
            }
          }
        }
      ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
    ],
  }