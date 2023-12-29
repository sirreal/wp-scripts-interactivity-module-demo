const DEWP = require("@wordpress/dependency-extraction-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "production",
  experiments: {
    outputModule: true,
  },
  output: {
    module: true,
    filename: "main.js",
  },
  plugins: [new DEWP()],
};
