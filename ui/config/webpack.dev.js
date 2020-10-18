const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base')

module.exports = env => merge([
    baseConfig(env.mode),
    {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(process.cwd(), './dist'),
            compress: true,
            port: env.port || 9000,
            open: 'chrome',
        }
    }
])
