const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  context: resolve("src/scripts"),
  entry: {
    "react-cart": "./react-cart.js",
    "react-cart-control": "./react-cart-control.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve("src/static"),
  },
};
