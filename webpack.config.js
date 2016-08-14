/**
 * @description
 * basic config for webpack to build
 * @author Erichain
 * @date 8/14/16
 */
module.exports = {
    entry: './src/blur-img.js',
    output: {
        path: './dist',
        filename: 'blur-img.js'
    },
    module: {
        loaders: [
            {
                test: './src/blur-img.js',
                loader: 'uglify'
            }
        ]
    },
    watch: true
};