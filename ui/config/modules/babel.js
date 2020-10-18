const path = require('path')

module.exports = (mode) => {
    const presetEnvConfigs = {
        production: {
            targets: {
                chrome: '58',
                ie: '11',
            },
        },
        development: {
            targets: '> 0.25%, not dead',
        },
    }

    return {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: path.resolve(__dirname, '../../src'),
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                                ['@babel/preset-env', presetEnvConfigs[mode]],
                            ],
                            plugins: [
                                '@babel/plugin-proposal-object-rest-spread',
                                [
                                    '@babel/plugin-proposal-decorators',
                                    { legacy: true },
                                ],
                                [
                                    '@babel/plugin-proposal-class-properties',
                                    { loose: true },
                                ],
                            ],
                        },
                    },
                },
            ],
        },
    }
}
