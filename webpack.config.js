const path = require('path');
module.exports = {
    entry: ['babel-polyfill', './app/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: ['babel-loader']
            }
        ]
    }
};