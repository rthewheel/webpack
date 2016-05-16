'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    context: __dirname + '/frontend',
    entry:  {
        main: ['./main'],
        rules: './rules',
        styles: './styles'
    },
    output:  {
        path:     __dirname + '/public',
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.styl'],
        modulesDirectories: [
            'node_modules',
            'bower_components'
        ]
    },
    devtool: '#inline-source-map',
    module: {
        preLoaders: [{
            test: /(\.jsx|\.js)$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }],
        loaders: [{
            test:   /\.js$/,
            exclude: /\/node_modules\//,
            loader: "babel?presets[]=es2015"
        }, {
            test:   /\.jade$/,
            loader: "jade?pretty=true"
        }, {
            test:   /\.styl$/,
            loader: ExtractTextPlugin.extract('css!stylus?resolve url')
        }, {
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]?[hash]'
        },
        {
            test: /\.jsx$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }],
        noParse: /\/node_modules\/(jquery)/

    },

    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true}),
        new CommonsChunkPlugin({
            name: "common",
            filename: "common.js"
        }),
        new HtmlWebpackPlugin({
            chunks: ['common','main'],
            template: 'test.jade',
            title: 'my webpack bundler',
            inject: true,
            hash: true
        }),
        // Добавить jquery глобально
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js",
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ],
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    devServer: {
        contentBase: __dirname + '/public',
        hot: true
    },
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    }
};