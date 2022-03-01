const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: process.env.NODE_ENV,
  plugins: [new HtmlWebpackPlugin({
    template: "./client/index.html",
  })],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test:  /\.s?[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.png|svg|jpe?g|gif/,
        use: ["file-loader"],
      }, 
    ]
  },
  devServer: {
    proxy: {
      "/home": "http://localhost:3000"
    }
  }
}