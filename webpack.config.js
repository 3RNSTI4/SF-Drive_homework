const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        FAQ: './scripts/FAQ.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'FAQ.html',
            template: './FAQ/FAQ.html',
            chunks: ['FAQ'],
            minify: {
                collapseWhitespace: !isDev
            }
        }),

        new HtmlWebpackPlugin({
            filename: 'aboutUs.html',
            template: './aboutUs/aboutUs.html',
            chunks: ['aboutUs'],
            minify: {
                collapseWhitespace: !isDev
            }
        }),
    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.ttf$/,
                use: ['file-loader']
            }
        ]
    }
}