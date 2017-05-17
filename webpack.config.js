const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/App.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: __dirname + '/dist',
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!less-loader" })
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
        }]
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};