const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "/public/assets/[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@layout": path.resolve(__dirname, "src/components/layout/"),
      "@global": path.resolve(__dirname, "src/components/global/"),
      "@templates": path.resolve(__dirname, "src/components/templates/"),
      "@organisms": path.resolve(__dirname, "src/components/organisms/"),
      "@molecules": path.resolve(__dirname, "src/components/molecules/"),
      "@atoms": path.resolve(__dirname, "src/components/atoms/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
