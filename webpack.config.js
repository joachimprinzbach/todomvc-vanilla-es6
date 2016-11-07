var webpack = require('webpack');

module.exports = {
    entry: "./src/app.js",

    devtool: 'source-map',

    output: {
        "path": __dirname + "./dist",
        "filename": "app.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ],
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        })
    ]
};
