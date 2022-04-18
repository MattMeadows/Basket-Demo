const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./public/data/products.json", to: "./data/products.json" },
        { from: "./public/assets", to: "./assets/[name][ext]" },
      ],
    }),
  ],
});
