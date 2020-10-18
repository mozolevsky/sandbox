const TerserPlugin = require('terser-webpack-plugin')

module.exports = mode => {

    /**
     * Webpack 4+ provides a bunch of optimization logic out of the box depends on mode.
     */
    const optimizationConfigs = {
        production: {},
        development: {
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true
                })
            ],
            runtimeChunk: {
                name: entrypoint => `runtime~${entrypoint.name}`
            }
        }
    }


    return {
        optimization: {
            ...optimizationConfigs[mode]
        }
    }
}
