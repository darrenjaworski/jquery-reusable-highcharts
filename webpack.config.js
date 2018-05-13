const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "jquery.reusable-highcharts.min.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd"
  },
  mode: "production",
  externals: {
    jquery: {
      commonjs: "jquery",
      commonjs2: "jquery",
      amd: "jquery",
      root: "$"
    }
  }
};
