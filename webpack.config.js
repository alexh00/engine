const path = require('path');
const distPath = path.resolve(__dirname, 'bin');
const DtsBundleWebpack = require('dts-bundle-webpack')

module.exports = {
    entry: './src/Engine.ts',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
    },
    plugins: [
        new DtsBundleWebpack({
            name: 'engine',
            main: './defs/Engine.d.ts',
            out: '../bin/engine.d.ts'
        })
    ],
    externals: {
        'pixi.js': 'PIXI'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'engine.js',
        path: distPath,
        library: 'engine'
    },
    devServer: {
        contentBase: distPath,
        compress: true,
        port: 9000
    }
};