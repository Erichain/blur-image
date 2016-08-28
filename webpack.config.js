/**
 * @description
 * basic config for webpack to build
 * @author Erichain
 * @date 8/14/16
 */
var OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    webpack = require('webpack');

module.exports = {
    entry: './src/blur-img.js',
    output: {
        path: './dist',
        filename: 'blur-img.min.js'
    },
    module: {
        loaders: [
            {
                test: './src/blur-img.js',
                exclude: /.spec.js/,
                loader: 'uglify'
            }, {
                test: /\.js$/,
                exclude: /(bower_components|node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    watch: true,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/example/',
            browser: 'Google Chrome'
        })
    ]
};