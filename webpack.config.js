const path = require("path");

module.exports = {
  mode: "production", // development
  entry: "./src/index.js",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // for dev server
  },
};
