const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = env => merge([
    baseConfig(env.mode),
    {
        mode: 'production',
        plugins: [
            new ForkTsCheckerWebpackPlugin()
        ]
    }
])
