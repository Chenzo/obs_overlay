const path = require("path");

module.exports = {
  devtool: "source-map",
  mode: "development",
  output: {
    //filename: "overlay.js"
    filename: '[name].js' //This fixes the Conflict: Multiple chunks emit assets to the same filename 
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, "./src/js")],
        //loader: "babel-loader"
      }
    ]
  }
};