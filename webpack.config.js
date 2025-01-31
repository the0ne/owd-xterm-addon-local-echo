var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "local-echo.js",
    library: "LocalEchoController",
    libraryExport: "default"
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map",
  node: {
    child_process: "empty",
    fs: "empty"
  }
};
