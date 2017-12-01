
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + '/src/base',
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
            },
            "/steps": {
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
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
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};
