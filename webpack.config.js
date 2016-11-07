const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {

    entry: "./src/app.js",

    devtool: 'source-map',

    output: {
        "path": "dist",
        "filename": "app.js"
    },

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
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
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
};
