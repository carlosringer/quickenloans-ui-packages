const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
const fs = require('fs');

module.exports = {
    entry: {
        app: ['./sample/js/main.js']
    },
    output: {
        path: __dirname + "/sample",
        filename: 'bundle.js'
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
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./main.css'),
    ]
};
