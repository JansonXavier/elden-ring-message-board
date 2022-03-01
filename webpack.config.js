const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: process.env.NODE_ENV,
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html",
  })],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.png|svg|jpg|gif/,
        use: ["file-loader"],
      }, 
    ]
  },
  devServer: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
}