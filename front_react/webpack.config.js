const HtmlWebPackPlugin = require('html-webpack-plugin');

let config = {};

config.context = __dirname + '/src';

config.entry = {
    app: './index.jsx'
};

config.output = {
    path: __dirname + '/dist',
    filename: 'fridge_meal.bundle.js'
}

config.devServer =  {
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
        "/new_tools": {
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
};

config.module = {
    rules: [
        {
            test: /\jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader",
                    options: {minimize: true}
                }
            ]
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
    ]
};

config.plugins = [
    new HtmlWebPackPlugin({
        template: "./index.html",
        filename: "./index.html"
    })
];

module.exports = config;
