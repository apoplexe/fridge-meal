let webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './fridge-meal.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'fridge-meal.bundle.js'
  },
  module: {
  loaders: [
    {
     test: /\.js$/,
     exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ]
}
};
