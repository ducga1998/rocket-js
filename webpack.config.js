const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry: './useLir.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'useLirmini.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|dist)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },

};