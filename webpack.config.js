module.exports = {
    entry: "./app",
    output: {
        path: __dirname + '/build',
        filename: "build.js",
        publicPath: '/build'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};