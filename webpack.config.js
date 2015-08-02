/**
 * Created by jerzybatalinski on 2015-08-02.
 */

var webpack = require('webpack');

module.exports = {
    context: __dirname + '/client',
    entry: './App.js',
    output: {
        path: __dirname + '/client',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            {test: /\.sass$/, loader: 'style!css!sass', exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ]
};