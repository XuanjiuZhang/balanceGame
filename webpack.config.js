const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    extensions: [".js", '.vue', ".less"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  entry: {
    home: ["./src/index.js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].[hash].min.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8001,
    host: "localhost",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "assets/images/[name].[ext]",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["home"],
    }),
    new VueLoaderPlugin(),
  ],
};
