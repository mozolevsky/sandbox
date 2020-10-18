const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')
const babel = require('./modules/babel')
const css = require('./modules/css')
const optimization = require('./modules/optimization')

module.exports = mode =>
    merge([
        {
            entry: path.resolve(process.cwd(), 'src/index.ts'),
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
            },
            plugins: [
                new HtmlWebpackPlugin(),
            ],
            output: {
                filename: '[name].[contenthash].js',
                path: path.resolve(process.cwd(), './dist'),
            },
        },
        babel(mode),
        css(),
        optimization(mode)
    ])
