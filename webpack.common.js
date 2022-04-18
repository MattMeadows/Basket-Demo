const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
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
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|gif|jpeg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets",
          },
        },
      },
      {
        test: /\.png$/,
        loader: "url-loader",
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
      "@context": path.resolve(__dirname, "src/context/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
