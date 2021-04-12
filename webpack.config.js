const path = require('path');
const fs = require('fs')
const distPath = path.resolve(__dirname, 'bin');
const DtsBundleWebpack = require('dts-bundle-webpack')

function getVersion() {
    return JSON.parse(fs.readFileSync('./package.json')).version;
}
  
function setVersion(version) {
    const p = './package.json'
    const pkg = JSON.parse(fs.readFileSync(p));
    pkg.version = version;
    fs.writeFileSync(p, JSON.stringify(pkg, null, 2))
    const s = `const version = { code: '${version}' }
    export {version}`;
    fs.writeFileSync('./src/core/version.ts', s, 'utf-8');
    return version;
}
  
function bumpVersion() {
    const versionArray = getVersion().split('.');
    versionArray[2] = (parseInt(versionArray[2]) + 1).toString();//increment the 3rd number
    return setVersion(versionArray.join('.'));
}

module.exports = (env, argv) => {
    if (argv.bump) {
        bumpVersion();
    }
    return {
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
}
