const path = require('path');

module.exports = {
    mode: 'production', // development
    entry: './src/index.js',
    devServer: {
        static: '.',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.'),
        publicPath: '/', // for dev server
    },
};