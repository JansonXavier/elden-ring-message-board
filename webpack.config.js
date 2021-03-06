const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: "./src/client/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [new HtmlWebpackPlugin({
    template: "./src/client/index.html",
    favicon: "./src/assets/elden_ring_icon.png"
  })],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx"],
  },
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
      "/": "http://localhost:3000"
    }
  }
}
