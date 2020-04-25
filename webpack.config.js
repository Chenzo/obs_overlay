const path = require("path");

module.exports = {
  devtool: "source-map",
  mode: "production",
  output: {
    filename: "overlay.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, "./src/js")],
        loader: "babel-loader"
      }
    ]
  }
};