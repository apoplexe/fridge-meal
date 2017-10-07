let webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './fridge-meal.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'fridge-meal.bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist',
    proxy: {
      "/products": {
        target: "http://localhost:5000",
        secure: false,
        changeOrigin: true
      },
      "/recipes": {
        target: "http://localhost:5000",
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      }
    ]
  }
};
