var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        // rules: [ { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] } ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'url-loader'
            }, 
            {
                rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }]
            }

        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true
    }
}