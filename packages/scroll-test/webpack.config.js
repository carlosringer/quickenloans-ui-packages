var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");
var fs = require('fs');

module.exports = {
    entry: {
        test: ['./tests/scroll-test.tests.js']
    },
    output: {
        path: __dirname + "/generated",
        filename: "[name]-bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              loader: 'css-loader!sass-loader',
            }),
          }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin('./main.css'),
    ]
}

