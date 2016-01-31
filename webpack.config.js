var path = require('path'),
    autoprefixer = require('autoprefixer');


var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    sourceMaps: 'both'
                }
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap!postcss!sass'
            },
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url?limit=25000'
            }
        ],
    },
    postcss: [autoprefixer({ browsers: ['last 40 versions'] })]
};

module.exports = config;
