const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
    },
    devServer: {
       port: 3000
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
        },
        /*{
          test: /\.(scss|sass|css)$/,
          exclude: /node_modules/,
          loaders: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
          'sass-loader',
          ]
        }*/
        { 
          test: /\.css$/, 
          loader: [
            MiniCSSExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.scss$/, 
          loader: [
            MiniCSSExtractPlugin.loader,
            "css-loader",
            'sass-loader'
          ]
        }
      ]
    },
    //devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html'
        }),
        new MiniCSSExtractPlugin()
    ],
  }