var path = require("path");

var distribution = {
    entry: [
        "./library/main.js"
    ],
    output: {
        filename: 'main.js',
        library: "clarity-react-responsive-grid-layout",
        libraryTarget: "umd",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = [
    distribution
]