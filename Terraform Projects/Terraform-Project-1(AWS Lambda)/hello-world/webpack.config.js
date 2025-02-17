const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  entry: './app.ts',
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'commonjs2'
  },
  plugins: [new ZipPlugin()],
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};