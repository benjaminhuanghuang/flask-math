const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            }]
    },
    resolve: {  // add following extension when module can not be found
        extensions: ['.js', '.jsx'],
        modules: ['client', 'node_modules'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public',
        port: 3010,
        "proxy": {
        "/api/*": {
            "target": "http://localhost:5010"
        }
    }
    },
    plugins: [
        new ExtractTextPlugin('public/style.css')
    ]
};
