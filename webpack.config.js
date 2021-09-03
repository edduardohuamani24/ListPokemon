//Importamos un paquete de node para encontrar facilmente la ubiciación de un archivo
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./js/main.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        //Agarrar todo los archivos que tengan extensión .css
        test: /\.css$/,
        // Webpack va a usar estos loaders al encontrarse con archivos css
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
  ],
  mode: "development",
};
