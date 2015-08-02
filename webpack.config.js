/**
 * Created by jerzybatalinski on 2015-08-02.
 */
module.exports = {
    context: __dirname + '/client',
    entry: {
        app: './App.js'
    },
    output: {
        path: __dirname + '/client',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/}
        ]
    }
};